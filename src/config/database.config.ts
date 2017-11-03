import {Injectable} from "@angular/core";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {Platform} from "ionic-angular";

@Injectable()
export class DatabaseConfig {

    database: SQLiteObject;
    items: Array<any>;

    constructor(private sqlite: SQLite, private platform: Platform) {
        console.log('Hello LocalService Provider');
        platform.ready().then(() => {
            sqlite.create({
                name: "epos.db",
                location: "default",
                createFromLocation: 1
            }).then((db: SQLiteObject) => {
                this.database = db;
                console.log(db);
                this.database
                    .executeSql("CREATE TABLE IF NOT EXISTS cart " +
                        "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        "customer_id NUMBER(11), " +
                        "product_id NUMBER(11), " +
                        "product_name VARCHAR(50), " +
                        "product_quantity NUMBER(4), " +
                        "product_price NUMBER(10), " +
                        "product_category_id NUMBER(11), " +
                        "product_image TEXT)", {})
                    .then((data) => {
                        console.log("TABLE CREATED: ", data);
                    }).catch((error) => {
                    console.error("Unable to execute sql", error);
                })
            }).catch((error) => {
                console.error("Unable to open database", error);
            });
        });
    }

    storeOrderData(cust_id, obj): Promise<any> {
        //data insert section
        return this.findRecord(cust_id, obj)
            .then((data) => {
                if (data) {
                    console.log("Re Insertion")
                    return this.updateRecord(cust_id, data, obj);
                } else {
                    console.log("Fresh Insertion");
                    this.insertRecord(cust_id, obj);
                }
            });

    }

    insertRecord(cust_id, obj) {
        console.log(obj);
        this.database.executeSql('INSERT INTO cart ' +
            '(customer_id,' +
            'product_id,' +
            'product_name,' +
            'product_quantity,' +
            'product_price,' +
            'product_category_id,' +
            'product_image) ' +
            'VALUES(?,?,?,?,?,?,?)',
            [
                cust_id,
                obj.product_id,
                obj.product_name,
                obj.quantity,
                obj.sales_price,
                obj.category_id,
                obj.product_image
            ])
            .then(() => {
                console.log('SQL Executed');
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRecord(cust_id, previous, latest) {
        var total_quantity = previous.product_quantity + latest.quantity;
        this.database
            .executeSql("UPDATE cart " +
                "SET product_quantity=" + total_quantity +
                " WHERE product_id=" + previous.product_id +
                " AND customer_id = " + cust_id, null)
            .then(() => {
                console.log('SQL Updated');
                // return this.selectData();
            })
            .catch(e => {
                console.log(e);
                // return null;
            });
    }

    async findRecord(cust_id, obj): Promise<Object> {
        return await this.database
            .executeSql("SELECT * FROM cart " +
                "WHERE product_id=" + obj.product_id +
                " AND customer_id=" + cust_id, null)
            .then((data) => {
                return data.rows.item(0);
            })
            .catch(err => console.log(err));
    }

    async deleteRecord(cust_id): Promise<boolean> {
        return await this.database
            .executeSql('DELETE FROM cart WHERE customer_id = ' + cust_id, null)
            .then(success => {
                return true;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    selectData(): Promise<void | Array<Object>> {
        return this.database
            .executeSql('SELECT * FROM cart', [])
            .then((data) => {

                this.items = [];

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        this.items.push({
                            id: data.rows.item(i).product_id,
                            name: data.rows.item(i).product_name,
                            quantity: data.rows.item(i).product_quantity,
                            price: data.rows.item(i).product_price,
                            category: data.rows.item(i).product_category_id,
                            product_image: data.rows.item(i).product_image
                        });
                    }

                    return this.items;
                } else {
                    return null;
                }
            }).catch(e => alert(JSON.stringify(e)));
    }

    createUserTable() {
        return this.database
            .executeSql("CREATE TABLE IF NOT EXISTS user " +
                "(id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "customer_id NUMBER(11), " +
                "current_location VARCHAR(50), " +
                "venue_id NUMBER(11), " +
                "passcode NUMBER(4), " +
                "notification BOOLEAN, " +
                "payment_type VARCHAR(50))", {})

    }

    insertDataByLabelName(tableName, labelName, value) {
        this.createUserTable()
            .then((data) => {
                console.log("USER TABLE CREATED: ", data);
                this.database.executeSql('INSERT INTO ' + tableName +
                    '(' + labelName + ') ' +
                    'VALUES(?)', [value])
            })
            .catch((error) => {
            console.error("Unable to execute sql to create USER table", error);
        });
    }

}
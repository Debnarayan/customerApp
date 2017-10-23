import {Injectable} from "@angular/core";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Injectable()
export class DatabaseConfig {

    database: SQLiteObject;
    items: Array<any>;

    constructor(private sqlite: SQLite) {
        console.log('Hello LocalService Provider');
        sqlite.create({
            name: "epos.db",
            location: "default",
            createFromLocation: 1
        }).then((db: SQLiteObject) => {
            this.database = db;
            console.log(db);
            this.database.executeSql("CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, product_id NUMBER(11), product_name VARCHAR(50), product_quantity NUMBER(4),product_price NUMBER(10), product_category_id NUMBER(11), image_link TEXT)", {})
                .then((data) => {
                    console.log("TABLE CREATED: ", data);
            }).catch((error) => {
                console.error("Unable to execute sql", error);
            })
        }).catch((error) => {
            console.error("Unable to open database", error);
        });
    }

    storeOrderData(obj): Promise<any> {
                //data insert section
               return this.findRecord(obj)
                    .then((data) => {
                        if (data) {
                            console.log("Re Insertion")
                            return this.updateRecord(data, obj);
                        } else {
                            console.log("Fresh Insertion");
                            this.insertRecord(obj);
                        }
                    });

    }

    insertRecord(obj) {
        console.log(obj);
        this.database.executeSql('INSERT INTO cart(product_id,product_name,product_quantity,product_price,product_category_id,image_link) VALUES(?,?,?,?,?,?)',
            [
                obj.id,
                obj.name,
                obj.quantity,
                obj.price,
                obj.category_id,
                obj.image_path
            ])
            .then(() => {
                console.log('SQL Executed');
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRecord(previous, latest) {
        var total_quantity = previous.product_quantity + latest.quantity;
       this.database.executeSql("UPDATE cart SET product_quantity=" + total_quantity + " WHERE product_id=" + previous.product_id, null)
            .then(() => {
                console.log('SQL Updated');
                // return this.selectData();
            })
            .catch(e => {
                console.log(e);
                // return null;
            });
    }

    async findRecord(obj): Promise<Object> {
        return await this.database.executeSql("SELECT * FROM cart WHERE product_id=" + obj.id, null)
            .then((data) => {
                return data.rows.item(0);
            })
            .catch(err => console.log(err));
    }

    selectData(): Promise<void | Array<Object>> {
        return this.database.executeSql('SELECT * FROM cart', [])
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
                            image: data.rows.item(i).image_link
                        });
                    }

                    return this.items;
                } else {
                    return null;
                }
            }).catch(e => alert(JSON.stringify(e)));
    }

}
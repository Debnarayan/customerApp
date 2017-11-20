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
            }).catch((error) => {
                console.error("Unable to open database", error);
            });
        });
    }

    createCartTable() {
        return this.database
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
                console.log("CART TABLE CREATED: ", data);
            })

            .catch((error) => {
                console.error("Unable to execute sql to create CART table", error);
            })
    }

    createUserTable() {
        return this.database
            .executeSql("CREATE TABLE IF NOT EXISTS user " +
                "(customer_id NUMBER(11) PRIMARY KEY, " +
                "venue_id NUMBER(11), " +
                "current_lat NUMBER(15), " +
                "current_lng NUMBER(15))", {})

            .then((data) => {
                console.log("USER TABLE CREATED: ", data);
            })

            .catch((error) => {
                console.error("Unable to execute sql to create USER table", error);
            });
    }

    createUserSettingsTable(){
        return this.database
            .executeSql("CREATE TABLE IF NOT EXISTS user_settings " +
                "(customer_id NUMBER(11) PRIMARY KEY, " +
                "passcode NUMBER(4), " +
                "notification BOOLEAN, " +
                "payment_type VARCHAR(50))", {})

            .then((data) => {
                console.log("USER SETTINGS TABLE CREATED: ", data);
            })

            .catch((error) => {
                console.error("Unable to execute sql to create USER SETTING table", error);
            });
    }

    createGiftCardTable() {
        return this.database
            .executeSql("CREATE TABLE IF NOT EXISTS gift " +
                "(customer_id NUMBER(11) PRIMARY KEY, " +
                "gift_id NUMBER(11), " +
                "balance FLOAT(6,2))", {})

            .then((data) => {
                console.log("GIFT TABLE CREATED: ", data);
            })

            .catch((error) => {
                console.error("Unable to execute sql to create GIFT table", error);
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

    selectRecordsByTableName(tableName: string, fields: any, conditionalFields: any, conditionalValues: any){
        var selectQuery = 'SELECT '+ fields +
                          ' FROM '+ tableName;

        if (typeof conditionalFields == 'string') {
            if(conditionalFields !== ''){
                selectQuery = selectQuery + ' WHERE ' + conditionalFields + ' = ' + conditionalValues;
            }
        } else {
            for (let i = 0; i < conditionalFields.length; i++) {
                if (i > 0) {
                    selectQuery = selectQuery + ' AND ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }else{
                    selectQuery = selectQuery + ' WHERE ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }
            }
        }

        return this.database
            .executeSql(selectQuery, [])
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

    insertRecordByTableName(tableName: string, fields: Object, values: Object) {
        var insertQuery = 'INSERT INTO ' + tableName +
            ' (' + fields + ')' +
            ' VALUES(' + values + ')';
        console.log(insertQuery);

        this.database.executeSql(insertQuery, {})

            .then(() => {
                console.log("Record Inserted" + values);
            })

            .catch(() => alert('Unable to store record in '+tableName+' table'));
    }

    insertDataByLabelName(tableName, labelName, value) {
        this.database.executeSql('INSERT INTO ' + tableName +
            '(' + labelName + ') ' +
            'VALUES(?)', [value])
            .then(() => {
                console.log("Data Inserted" + value);
            })
            .catch(() => alert('Unable to store user data'));
    }

    updateRecordByTableName(tableName: string, fields: any, values: any, conditionalFields: any, conditionalValues: any) {
        var query = 'UPDATE ' + tableName;
        if (typeof fields == 'string') {
            query = query + ' SET ' + fields + ' = ' + values;
        } else {
            for (let i = 0; i < fields.length; i++) {
                if (i > 0) query = query + ' AND';
                query = query + ' SET ' + fields[i] + ' = ' + values[i];
            }
        }

        if (typeof conditionalFields == 'string') {
            query = query + ' WHERE ' + conditionalFields + ' = ' + conditionalValues;
        } else {
            for (let i = 0; i < conditionalFields.length; i++) {
                if (i > 0) query = query + ' AND';
                query = query + ' WHERE ' + conditionalFields[i] + ' = ' + conditionalValues[i];
            }
        }

        this.database.executeSql(query, null)
            .then((data) => {
                console.log(tableName + 'Successfully updated');
            })
            .catch(() => {
                console.log('Error occured to update ' + tableName + 'table');
            });
    }

    updateDataByLabelName(tableName, labelName, value, conditionalField, conditionalValue) {
        this.database.executeSql('UPDATE ' + tableName +
            ' SET ' + labelName + ' = ' + value +
            ' WHERE ' + conditionalField + ' = ' + conditionalValue, [])
            .then(() => {
                console.log("Data Updated");
            })
            .catch(() => alert('Unable to update user data'));
    }

    // selectDataByLabelName(tableName, labelName, conditionalField, conditionalValue) {
    //     var addQuery = '';
    //     if (conditionalField !== '') {
    //         addQuery = ' WHERE ' + conditionalField + ' = ' + conditionalValue;
    //     }
    //     var query = 'SELECT ' + labelName +
    //         ' FROM ' + tableName +
    //         addQuery;
    //     console.log(query);
    //
    //     var selectedData = this.database.executeSql(query, null)
    //         .then((data) => {
    //             return data.rows.item(0);
    //         })
    //         .catch(() => {
    //             console.log('Unable to get '+ tableName +' data');
    //             return false;
    //
    //         });
    //     console.log(selectedData);
    //     return Promise.all([selectedData]);
    // }

    selectDataByTableName(tableName:string, labelName:any, conditionalFields:any, conditionalValues:any) {
        var selectQuery = 'SELECT ' + labelName +
                          ' FROM ' + tableName;

        if (typeof conditionalFields == 'string') {
            if(conditionalFields !== ''){
                selectQuery = selectQuery + ' WHERE ' + conditionalFields + ' = ' + conditionalValues;
            }
        } else {
            for (let i = 0; i < conditionalFields.length; i++) {
                if (i > 0) {
                    selectQuery = selectQuery + ' AND ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }else{
                    selectQuery = selectQuery + ' WHERE ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }
            }
        }

        console.log(selectQuery);

        var selectedData = this.database.executeSql(selectQuery, null)
            .then((data) => {
                return data.rows.item(0);
            })
            .catch(() => {
                console.log('Unable to get '+ tableName +' data');
                return false;

            });
        console.log(selectedData);
        return Promise.all([selectedData]);
    }

    deleteRecordByTableName(tableName: string, conditionalFields: any, conditionalValues: any) {
        var deleteQuery = 'DELETE FROM ' + tableName;
        if (typeof conditionalFields == 'string') {
            deleteQuery = deleteQuery + ' WHERE ' + conditionalFields + ' = ' + conditionalValues;
        } else {
            for (let i = 0; i < conditionalFields.length; i++) {
                if (i > 0) {
                    deleteQuery = deleteQuery + ' AND ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }else{
                    deleteQuery = deleteQuery + ' WHERE ' + conditionalFields[i] + ' = ' + conditionalValues[i];
                }
            }
        }

        console.log(deleteQuery);

        return this.database
            .executeSql(deleteQuery, null)

            .then((data) => {
                console.log(tableName + ' table record successfully deleted');
                return true;
            })

            .catch(() => {
                console.log('Error occured to delete ' + tableName + ' table\'s record');
                return false;
            });
    }
}
/* Design Patterns
    Factory
    Prototype
    Constructor
    Module
    Revealing Module
    Publish/Subscribe
    Singleton
*/


class DataBase {
    constructor(dbName) {
        if (DataBase.exists) {
            return DataBase.instance;
        }
        this._dbName = dbName;
        DataBase.instance = this;
        DataBase.exists = true;
        return this;
    }

    getData() {
        return this._dbName;
    }

    setData(value) {
        this._dbName = value;
    }
}

const mysql = new DataBase('MySQL');
console.log(mysql.getData());

const mongoDb = new DataBase('MongoDB');
console.log(mongoDb.getData());
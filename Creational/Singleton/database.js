class Database {
  construtor(data) {
    if(Database.exists) {
      return Database.instace
    }

    this._data = data
    Database.instance = this
    Database.exists = true
    return this
  }

  getData() {
    return this._data
  }

  setData(data) {
    this._data = data
  }
}

const mongo = new Database('mongo')
console.log(mongo.getData())

const mysql = new Database('mysql')
console.log(mysql.getData())
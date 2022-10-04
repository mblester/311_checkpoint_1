const mysql = require("mysql");
const mongoose = require('mongoose')

require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mongoose connection...");
      const config = {
        connectionLimit: 100,
        host: DB_HOST,
        // user: DB_USER,
        // password: DB_PASSWORD,
        // database: DB_DATABASE,
        // port: DB_PORT,
      };

      this.pool = mongoose.createPool(config);
      
      return this.pool;
    }
    return this.pool;
  }
}
const instance = new Connection();
module.exports = instance;

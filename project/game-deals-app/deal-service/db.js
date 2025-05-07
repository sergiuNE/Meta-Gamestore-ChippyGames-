const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "deals-db",
  user: "root",
  password: "root",
  database: "deals",
  port: 3306,
});

module.exports = pool;

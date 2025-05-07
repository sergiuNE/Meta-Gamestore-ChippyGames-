const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "users-db",
  user: "root",
  password: "root",
  database: "users",
  port: 3306,
});

module.exports = pool;

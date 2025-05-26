const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "platforms-db",
  user: "root",
  password: "root",
  database: "platforms",
  port: 3306,
});

module.exports = pool;

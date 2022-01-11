const mariadb = require("mariadb");

const config = {
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: process.env.CONN_LIMIT,
};

console.log(config);

const pool = mariadb.createPool(config);

module.exports = pool;

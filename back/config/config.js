require('dotenv').config();

module.exports = {
  "development": {
    "username": "maria",
    "password": process.env.MYSQL_PASSWORD,
    "database": "front_study",
    "host": "34.64.86.173",
    "dialect": "mysql"
  },
  "test": {
    "username": "maria",
    "password": process.env.MYSQL_PASSWORD,
    "database": "front_study",
    "host": "34.64.86.173",
    "dialect": "mysql"
  },
  "production": {
    "username": "maria",
    "password": process.env.MYSQL_PASSWORD,
    "database": "front_study",
    "host": "34.64.86.173",
    "dialect": "mysql"
  }
}
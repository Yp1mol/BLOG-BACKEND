"use strict";

var _require = require('typeorm'),
  DataSource = _require.DataSource;
var _require2 = require('dotenv'),
  config = _require2.config;
config();
var dataSource = new DataSource({
  type: 'postgres',
  host: "localhost",
  port: parseInt(5432),
  username: "postgre",
  password: "123123",
  database: "postdb",
  entities: ['dist/**/*.entity.js'],
  cli: {
    migrationsDir: __dirname + './migrations'
  },
  migrations: ['dist/db/migrations/*.ts'],
  migrationsTableName: 'migrations',
  migrationsRun: false
});
module.exports = {
  dataSource: dataSource
};
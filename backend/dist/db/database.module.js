"use strict";

var _dec, _class;
const {
  Module
} = require('@nestjs/common');
const {
  databaseProviders
} = require('./database.providers');
let DatabaseModule = (_dec = Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
}), _dec(_class = class DatabaseModule {}) || _class);
module.exports = {
  DatabaseModule
};
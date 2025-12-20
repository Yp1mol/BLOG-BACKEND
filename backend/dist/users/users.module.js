"use strict";

var _dec, _class;
const {
  Module
} = require('@nestjs/common');
const {
  UsersService
} = require('./users.service');
const {
  UsersController
} = require('./users.controller');
const {
  usersProviders
} = require('./users.providers');
let UsersModule = (_dec = Module({
  providers: [...usersProviders, UsersService],
  controllers: [UsersController],
  exports: [UsersService]
}), _dec(_class = class UsersModule {}) || _class);
module.exports = {
  UsersModule
};
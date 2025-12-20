"use strict";

var _dec, _class;
const {
  Module
} = require('@nestjs/common');
const {
  JwtModule
} = require('@nestjs/jwt');
const {
  AuthService
} = require('./auth.service');
const {
  AuthController
} = require('./auth.controller');
const {
  UsersModule
} = require('../users/users.module');
const {
  jwtConstants
} = require('./constants');
let AuthModule = (_dec = Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {
      expiresIn: '60s'
    }
  })],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
}), _dec(_class = class AuthModule {}) || _class);
module.exports = {
  AuthModule
};
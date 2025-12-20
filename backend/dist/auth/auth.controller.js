"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _class2;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
const {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards
} = require('@nestjs/common');
const {
  AuthService
} = require('./auth.service');
const {
  AuthGuard
} = require('./auth.guard');
let AuthController = (_dec = Controller('auth'), _dec2 = Post('login'), _dec3 = UseGuards(AuthGuard), _dec4 = Get('profile'), _dec(_class = (_class2 = class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  async login(body) {
    const {
      username,
      password
    } = body;
    return this.authService.signIn(username, password);
  }
  getProfile(req) {
    return req.user;
  }
}, _applyDecoratedDescriptor(_class2.prototype, "login", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "login"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getProfile", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getProfile"), _class2.prototype), _class2)) || _class);
module.exports = {
  AuthController
};
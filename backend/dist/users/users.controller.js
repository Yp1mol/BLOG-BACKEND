"use strict";

var _dec, _dec2, _dec3, _class, _class2;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
const {
  Controller,
  Get,
  Post: HttpPost
} = require('@nestjs/common');
const {
  UsersService
} = require('./users.service');
let UsersController = (_dec = Controller('users'), _dec2 = Get(), _dec3 = HttpPost('register'), _dec(_class = (_class2 = class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }
  async list() {
    return this.usersService.findAll();
  }
  async register(req) {
    return this.usersService.create(req.body);
  }
}, _applyDecoratedDescriptor(_class2.prototype, "list", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "register", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "register"), _class2.prototype), _class2)) || _class);
module.exports = {
  UsersController
};
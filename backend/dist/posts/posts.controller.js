"use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _class, _class2;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
const {
  Controller,
  Get,
  Post: HttpPost,
  Put,
  Delete,
  UseGuards
} = require('@nestjs/common');
const {
  AuthGuard
} = require('../auth/auth.guard');
const {
  RolesGuard
} = require('../auth/roles.guard');
const {
  Roles
} = require('../auth/roles.decorator');
const {
  PostsService
} = require('./posts.service');

// Создаём экземпляр сервиса вручную, без DI
const postsService = new PostsService();
let PostsController = (_dec = Controller('posts'), _dec2 = Get(), _dec3 = UseGuards(AuthGuard), _dec4 = HttpPost(), _dec5 = UseGuards(AuthGuard, RolesGuard), _dec6 = Roles(['admin']), _dec7 = Put(':id'), _dec8 = UseGuards(AuthGuard, RolesGuard), _dec9 = Roles(['admin']), _dec0 = Delete(':id'), _dec(_class = (_class2 = class PostsController {
  // Без конструктора — никаких параметр‑декораторов и проблем с DI

  async list() {
    // Здесь точно не будет undefined
    return postsService.findAll();
  }
  async create(req) {
    // В JS без параметр‑декораторов Nest может не передать req.
    // Если req окажется undefined, добавь здесь получение из контекста, либо перепишем на Express-роуты.
    return postsService.create(req?.body, req?.user);
  }
  async update(req) {
    const id = req?.params?.id;
    return postsService.update(id, req?.body, req?.user);
  }
  async delete(req) {
    const id = req?.params?.id;
    return postsService.remove(id, req?.user);
  }
}, _applyDecoratedDescriptor(_class2.prototype, "list", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "create", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "create"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "update", [_dec5, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "update"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "delete", [_dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "delete"), _class2.prototype), _class2)) || _class);
module.exports = {
  PostsController
};
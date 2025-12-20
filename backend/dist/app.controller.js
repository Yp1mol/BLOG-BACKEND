"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;
var _common = require("@nestjs/common");
var _app = require("app.service");
var _dec, _dec2, _dec3, _class, _class2;
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
let AppController = exports.AppController = (_dec = (0, _common.Controller)(), _dec2 = (0, _common.Dependencies)(_app.AppService), _dec3 = (0, _common.Get)(), _dec(_class = _dec2(_class = (_class2 = class AppController {
  constructor(appService) {
    this.appService = appService;
  }
  getHello() {
    return this.appService.getHello();
  }
}, _applyDecoratedDescriptor(_class2.prototype, "getHello", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype), _class2)) || _class) || _class);
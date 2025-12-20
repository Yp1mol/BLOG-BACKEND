"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppService = void 0;
var _common = require("@nestjs/common");
var _dec, _class;
let AppService = exports.AppService = (_dec = (0, _common.Injectable)(), _dec(_class = class AppService {
  getHello() {
    return 'Hello World!';
  }
}) || _class);
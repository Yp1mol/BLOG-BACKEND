"use strict";

var _dec, _class;
const {
  Injectable
} = require('@nestjs/common');
let LoggingMiddleware = (_dec = Injectable(), _dec(_class = class LoggingMiddleware {
  use(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  }
}) || _class);
module.exports = {
  LoggingMiddleware
};
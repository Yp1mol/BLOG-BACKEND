"use strict";

var _dec, _class;
const {
  Injectable
} = require('@nestjs/common');
const {
  tap
} = require('rxjs/operators');
let LoggingInterceptor = (_dec = Injectable(), _dec(_class = class LoggingInterceptor {
  intercept(context, next) {
    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}) || _class);
module.exports = {
  LoggingInterceptor
};
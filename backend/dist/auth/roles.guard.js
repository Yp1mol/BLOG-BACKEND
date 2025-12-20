"use strict";

var _dec, _class;
const {
  Injectable
} = require('@nestjs/common');
const {
  Reflector
} = require('@nestjs/core');
let RolesGuard = (_dec = Injectable(), _dec(_class = class RolesGuard {
  constructor(reflector) {
    this.reflector = reflector;
  }
  canActivate(context) {
    const requiredRoles = this.reflector.get('roles', context.getHandler());
    if (!requiredRoles) return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) return false;
    return requiredRoles.includes(user.role);
  }
}) || _class);
module.exports = {
  RolesGuard
};
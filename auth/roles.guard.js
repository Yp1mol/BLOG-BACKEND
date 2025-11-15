const { Injectable } = require('@nestjs/common');
const { Reflector } = require('@nestjs/core');

@Injectable()
class RolesGuard {
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
}

module.exports = { RolesGuard };

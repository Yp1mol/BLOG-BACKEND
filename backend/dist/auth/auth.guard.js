"use strict";

var _dec, _class;
const {
  Injectable,
  UnauthorizedException
} = require('@nestjs/common');
const {
  JwtService
} = require('@nestjs/jwt');
let AuthGuard = (_dec = Injectable(), _dec(_class = class AuthGuard {
  constructor(jwtService) {
    this.jwtService = jwtService;
  }
  async canActivate(context) {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid token');
    }
    const token = authHeader.split(' ')[1];
    try {
      const payload = await this.jwtService.verifyAsync(token);
      request.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Token invalid or expired');
    }
  }
}) || _class);
module.exports = {
  AuthGuard
};
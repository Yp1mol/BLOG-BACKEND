const { Controller, Post, Get, Body, Request, UseGuards } = require('@nestjs/common');
const { AuthService } = require('./auth.service');
const { AuthGuard } = require('./auth.guard');
@Controller('auth')
class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  @Post('login')
  async login(body) {
    const { username, password } = body;
    return this.authService.signIn(username, password);
  }
  @UseGuards(AuthGuard)
  @Get('profile') getProfile(req) {
    return req.user;
  }
} module.exports = { AuthController };

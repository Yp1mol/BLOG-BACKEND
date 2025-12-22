import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) { }

  @Post('login')
  login(@Body() body: any) {
    return this.auth.login(body.username, body.password);
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    return this.auth.register(body.username, body.password);
  }
}

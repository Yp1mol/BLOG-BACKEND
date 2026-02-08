import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { RegisterUserDto } from './dto/user.register.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() registerUserDto: RegisterUserDto) {
    return this.auth.login(registerUserDto.username, registerUserDto.password);
  }

  @Public()
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.auth.register(registerUserDto.username, registerUserDto.password);
  }
}

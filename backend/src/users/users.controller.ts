import { Controller, Get, Req, Patch, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get('me')
  getMe(@Req() req) {
    return this.usersService.findOne(req.user.sub);
  }
  @Get()
  list() {
    return this.usersService.findAll();
  }
  
  @Patch('me')
  updateMe(@Req() sub: string, @Body() body: { username: string }) {
    const userId = sub;
    
    return this.usersService.updateUsername(userId, body.username);
  }

}

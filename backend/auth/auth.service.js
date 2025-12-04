const { Injectable, UnauthorizedException } = require('@nestjs/common');
const { UsersService } = require('../src/users/users.service');
const { JwtService } = require('@nestjs/jwt');
const bcrypt = require('bcryptjs');

@Injectable()
class AuthService {
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  async signIn(username, password) {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, username: user.username, role: user.role };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}

module.exports = { AuthService };

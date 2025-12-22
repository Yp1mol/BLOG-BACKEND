import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
  ) { }

  async login(username: string, password: string) {
    const user = await this.users.findByUsername(username);

    if (!user) {
      throw new BadRequestException('User not found');
    }
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      throw new BadRequestException('Wrong password');
    }

    return {
      access_token: await this.jwt.signAsync({
        sub: user.id,
        role: user.role,
      }),
    };
  }
  async register(username: string, password: string) {
    const existing = await this.users.findByUsername(username);
    
    if (existing) {
      throw new BadRequestException('User already exists');
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await this.users.create({
      username,
      password: hash,
    });

    return { id: user.id, username: user.username };
  }
}

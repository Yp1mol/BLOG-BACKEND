import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) { }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: string) {
    return this.usersRepo.findOne({
      where: { id },
      select: ['id', 'username', 'password']
    });
  }

  findByUsername(username: string) {
    return this.usersRepo.findOne({ where: { username } });
  }

  create(data: Partial<User>) {
    const user = this.usersRepo.create(data);
    
    return this.usersRepo.save(user);
  }

  async updateUsername(id: string, username: string) {
    const user = await this.usersRepo.findOne({ where: { id } });
    user.username = username;
    this.usersRepo.save(user);

    return { id: user.id, username: user.username,};
  }
  }


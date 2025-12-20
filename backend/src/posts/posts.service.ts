import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private repo: Repository<Post>,
  ) { }

  findAll() {
    return this.repo.find();
  }

  create(data: any, user: any) {
    return this.repo.save(
      this.repo.create({
        ...data,
      }),
    );
  }
}

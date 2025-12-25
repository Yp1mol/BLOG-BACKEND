import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private repo: Repository<Post>,
  ) { }

  findAllByUser(userId: string) {
    return this.repo.find({
      where: {
        author: { id: userId },
      },
    });
  }
  async remove(id: string, user: any) {
    const post = await this.repo.findOne({
      where: { id },
      relations: ['author'],
    });

    if (!post) {
      throw new Error('Post not found');
    }

    if (post.author.id !== user.sub) {
      throw new ForbiddenException('Not your post');
    }
    await this.repo.delete(id);
    return { success: true };
  }

  create(data: any, user: any) {
    return this.repo.save(
      this.repo.create({
        ...data,
        author: { id: user.sub },
      }),
    );
  }
  async update(id: string, data: any, userId: string) {
    const post = await this.repo.findOne({
      where: { id },
      relations: ['author'],
    });

    if (!post) throw new NotFoundException('Post not found');
    if (post.author.id !== userId) {
      throw new ForbiddenException('Not your post');
    }

    post.title = data.title;
    post.content = data.content;

    return this.repo.save(post);
  }
}

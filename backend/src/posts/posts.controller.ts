import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Public } from '../auth/public.decorator';
import { AuthGuard } from '../auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }
  @Public()
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Public()
  @Post()
  create(
    @Body() body: { title: string; content: string },
    @Request() req,
  ) {
    return this.postsService.create(body, req.user);
  }
}

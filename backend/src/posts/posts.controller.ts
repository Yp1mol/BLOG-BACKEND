import { Controller, Get, Post, Body, Request, UseGuards, Put, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '../auth/auth.guard';
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req) {
    return this.postsService.findAllByUser(req.user.sub);
  }

  @Post()
  create(
    @Body() body: { title: string; content: string },
    @Request() req,
  ) {
    return this.postsService.create(body, req.user);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body,
    @Request() req,
  ) {
    return this.postsService.update(id, body, req.user.sub);
  }
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.postsService.remove(id, req.user);
  }
  
}

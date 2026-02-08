import { Controller, Get, Post, Body, Request, UseGuards, Put, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePostDto } from './dto/post.dto';

@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req) {
    return this.postsService.findAllByUser(req.user.sub);
  }
@Get('my')
findByUser(@Request() req: any) { 
  const userId = req.user.sub; 
  
  return this.postsService.findAllByUser(userId);
}
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    @Request() req,
  ) {
    return this.postsService.create(createPostDto, req.user.sub);
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
    return this.postsService.remove(id, req.user.sub);
  }

}

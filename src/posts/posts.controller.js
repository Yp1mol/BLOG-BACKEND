const { Controller, Get, Post: HttpPost, Put, Delete, Body, Param,
    UseGuards, Request } = require('@nestjs/common');
const { PostsService } = require('./posts.service');
const { AuthGuard } = require('../auth/auth.guard');
const { RolesGuard } = require('../auth/roles.guard');
const { Roles } = require('../auth/roles.decorator');
@Controller('posts')
class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    @Get()
    async list() {
        return this.postsService.findAll();
    }
    @UseGuards(AuthGuard)
    @HttpPost()
    async create(@Body() dto, @Request() req) {
        return this.postsService.create(dto, req.user);
    }
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(['admin'])
    @Put(':id')
    async update(@Param('id') id, @Body() dto, @Request() req) {
        return this.postsService.update(id, dto, req.user);
    }
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(['admin'])
    @Delete(':id')
    async delete(@Param('id') id, @Request() req) {
        return this.postsService.remove(id, req.user);
    }
}
module.exports = { PostsController };
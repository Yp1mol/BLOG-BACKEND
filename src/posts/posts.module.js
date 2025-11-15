const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { postsProviders } = require('./posts.providers');
const { PostsService } = require('./posts.service');
const { PostsController } = require('./posts.controller');
@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    providers: [...postsProviders, PostsService],
    controllers: [PostsController],
    exports: [PostsService],
})
class PostsModule { }
module.exports = { PostsModule };
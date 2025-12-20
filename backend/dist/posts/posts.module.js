"use strict";

var _dec, _class;
const {
  Module
} = require('@nestjs/common');
const {
  TypeOrmModule
} = require('@nestjs/typeorm');
const {
  Post
} = require('./post.entity');
const {
  PostsService
} = require('./posts.service');
const {
  PostsController
} = require('./posts.controller');
let PostsModule = (_dec = Module({
  imports: [TypeOrmModule.forFeature([Post])],
  // ⚡ подключаем Post
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService]
}), _dec(_class = class PostsModule {}) || _class);
module.exports = {
  PostsModule
};
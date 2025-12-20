"use strict";

var _dec, _class;
const {
  Module
} = require('@nestjs/common');
const {
  TypeOrmModule
} = require('@nestjs/typeorm');
const {
  User
} = require('./users/user.entity.ts');
const {
  Post
} = require('./posts/post.entity.ts');
const {
  UsersModule
} = require('./users/users.module');
const {
  PostsModule
} = require('./posts/posts.module');
const {
  AuthModule
} = require('./auth/auth.module');
let AppModule = (_dec = Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgre',
    password: '123123',
    database: 'postdb',
    entities: [User, Post],
    // ⚡ обязательно оба EntitySchema
    synchronize: true
  }), UsersModule, PostsModule, AuthModule]
}), _dec(_class = class AppModule {}) || _class);
module.exports = {
  AppModule
};
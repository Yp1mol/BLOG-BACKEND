"use strict";

const {
  DataSource
} = require('typeorm');
const {
  User
} = require('../users/user.entity.ts');
const {
  Post
} = require('../posts/post.entity.ts');
const databaseProviders = [{
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    return new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgre',
      password: '123123',
      database: 'postdb',
      entities: [User, Post],
      // ✅ явно указываем сущности
      synchronize: true
    }).initialize();
  }
}];
module.exports = {
  databaseProviders
};
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
const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgre',
  password: '123123',
  database: 'postdb',
  entities: [User, Post],
  // ⚡ оба EntitySchema
  synchronize: true
});
module.exports = {
  dataSource
};
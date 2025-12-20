const { DataSource } = require('typeorm');
const { User } = require('../users/user.entity');
const { Post } = require('../posts/post.entity');

const dataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgre',
  password: '123123',
  database: 'postdb',
  entities: [User, Post],
  migrations: ['src/db/migrations/*.js'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

module.exports = { dataSource, dataSourceOptions};

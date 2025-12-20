const { Post } = require('./post.entity');

const postsProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];

module.exports = { postsProviders };

const { User } = require('./user.entity');
const { dataSource } = require('../db/data-source');

const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: () => dataSource.getRepository(User),
  },
];

module.exports = { usersProviders };

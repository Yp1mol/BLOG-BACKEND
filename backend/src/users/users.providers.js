const { DataSource } = require('typeorm');
const { User } = require('./user.entity');
const { dataSource } = require('../../dist/db/datasource'); 

const usersProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];

module.exports = { usersProviders };

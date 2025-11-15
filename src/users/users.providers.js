const { DataSource } = require('typeorm');
const { User } = require('./user.entity');

const usersProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE'],
    },
];

module.exports = { usersProviders };

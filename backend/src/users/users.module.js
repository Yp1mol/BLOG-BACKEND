const { Module } = require('@nestjs/common');
const { UsersService } = require('./users.service');
const { UsersController } = require('./users.controller');
const { usersProviders } = require('./users.providers');

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
class UsersModule {}

module.exports = { UsersModule };

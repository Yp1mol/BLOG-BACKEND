const { Module } = require('@nestjs/common');
const { JwtModule } = require('@nestjs/jwt');
const { AuthService } = require('./auth.service');
const { AuthController } = require('./auth.controller');
const { UsersModule } = require('../src/users/users.module');
const { jwtConstants } = require('./constants');

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
class AuthModule {}

module.exports = { AuthModule };

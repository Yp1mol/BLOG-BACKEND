const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { UsersModule } = require('./users/users.module');
const { AuthModule } = require('../auth/auth.module.js');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: parseInt(5432),
      username: "postgre",
      password: "123123",
      database: "postdb",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
})
class AppModule { }

module.exports = { AppModule };
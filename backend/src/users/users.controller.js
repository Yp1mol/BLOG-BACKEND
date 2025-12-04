const { Controller, Post, HttpCode, HttpStatus } = require('@nestjs/common');
const bcrypt = require('bcryptjs');

@Controller('users')
class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(req, res) {
    const dto = req.body; 
    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.usersService.create({
      username: dto.username,
      password: hashed,
      role: dto.role || 'user',
    });

    return res.json(user);
  }
}

module.exports = { UsersController };

"use strict";

var _dec, _class;
const {
  Injectable
} = require('@nestjs/common');
let UsersService = (_dec = Injectable(), _dec(_class = class UsersService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async findAll() {
    return this.userRepository.find({
      relations: ['posts']
    });
  }
  async findOne(id) {
    return this.userRepository.findOne({
      where: {
        id
      },
      relations: ['posts']
    });
  }
  async create(data) {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }
}) || _class);
module.exports = {
  UsersService
};
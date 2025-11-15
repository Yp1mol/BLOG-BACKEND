const { Injectable } = require('@nestjs/common');

@Injectable()
class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async findAll() {
        return this.userRepository.find();
    }

    async findByUsername(username) {
        return this.userRepository.findOne({ where: { username } });
    }

    async create(data) {
        return this.userRepository.save(data);
    }
}

module.exports = { UsersService };

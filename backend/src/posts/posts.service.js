const { Injectable, Inject, NotFoundException, ForbiddenException } =
    require('@nestjs/common');
const { Post } = require('./post.entity');
@Injectable()
class PostsService {
    constructor(@Inject('POST_REPOSITORY') postRepository) {
        this.postRepository = postRepository;
    }
    async findAll() {
        return this.postRepository.find({ relations: ['author'] });
    }
    async findOne(id) {
        const post = await this.postRepository.findOne({
            where: { id },
            relations: ['author']
        });
        if (!post) throw new NotFoundException();
        return post;
    }
    async create(data, user) {
        const post = this.postRepository.create({ ...data, author: user });
        return this.postRepository.save(post);
    }
    async update(id, data, user) {
        const post = await this.findOne(id);
        if (post.author.id !== user.sub && user.role !== 'admin') {
            throw new ForbiddenException();
        }
        Object.assign(post, data);
        return this.postRepository.save(post);
    }
    async remove(id, user) {
        const post = await this.findOne(id);
        if (post.author.id !== user.sub && user.role !== 'admin') {
            throw new ForbiddenException();
        }
        return this.postRepository.delete(id);
    }
}
module.exports = { PostsService };
"use strict";

var _dec, _class;
// src/posts/posts.service.js
const {
  Injectable,
  NotFoundException,
  ForbiddenException
} = require('@nestjs/common');
const {
  Post
} = require('./post.entity');
const {
  dataSource
} = require('../db/data-source');
let PostsService = (_dec = Injectable(), _dec(_class = class PostsService {
  constructor() {
    // напрямую получаем репозиторий из DataSource
    this.postRepository = dataSource.getRepository(Post);
  }
  async findAll() {
    return this.postRepository.find({
      relations: ['author']
    });
  }
  async findOne(id) {
    const post = await this.postRepository.findOne({
      where: {
        id
      },
      relations: ['author']
    });
    if (!post) throw new NotFoundException();
    return post;
  }
  async create(data, user) {
    const post = this.postRepository.create({
      ...data,
      author: user
    });
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
}) || _class);
module.exports = {
  PostsService
};
const { Entity, PrimaryGeneratedColumn, Column, ManyToOne } =
    require('typeorm');
const { User } = require('../users/user.entity');
@Entity({ name: 'posts' })
class Post {
    @PrimaryGeneratedColumn('uuid') id;
    @Column() title;
    @Column('text') content;
    @ManyToOne(() => User, (user) => user.id, { eager: true })
    author;
}
module.exports = { Post };
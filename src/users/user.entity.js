const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm');
@Entity({ name: 'users' })
class User {
    @PrimaryGeneratedColumn('uuid') id;
    @Column({type: 'varchar'}) username;
    @Column({type: 'varchar'}) password;
    @Column({type: 'varchar', default: 'user' }) role;
}
module.exports = { User };
"use strict";

const {
  Table
} = require("typeorm");
class Users1762031154852 {
  async up(queryRunner) {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: "username",
        type: "varchar"
      }, {
        name: "password",
        type: "varchar"
      }, {
        name: "role",
        type: "varchar",
        default: "'user'"
      }]
    }), true);
  }
  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }
}
module.exports = {
  Users1762031154852
};
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1762031154852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "role",
                        default: "user",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
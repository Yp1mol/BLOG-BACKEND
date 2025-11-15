
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Posts1762031383645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "content",
                        type: "varchar",
                    },
                    {
                        name: "author_id",
                        type: "int",
                    },
                ],
            }),
            true,
        )
        await queryRunner.createForeignKey(
            "posts",
            new TableForeignKey({
                columnNames: ["author_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("posts")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("author_id") !== -1,
        )
        await queryRunner.dropForeignKey("posts", foreignKey);
        await queryRunner.dropTable("posts");


    }

}
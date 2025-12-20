const { Table, TableForeignKey } = require("typeorm");

class Posts1762031383645 {
    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
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
            true
        );

        await queryRunner.createForeignKey(
            "posts",
            new TableForeignKey({
                columnNames: ["author_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    async down(queryRunner) {
        const table = await queryRunner.getTable("posts");
        const foreignKey = table.foreignKeys.find(
            fk => fk.columnNames.includes("author_id")
        );

        if (foreignKey) {
            await queryRunner.dropForeignKey("posts", foreignKey);
        }

        await queryRunner.dropTable("posts");
    }
}

module.exports = { Posts1762031383645 };

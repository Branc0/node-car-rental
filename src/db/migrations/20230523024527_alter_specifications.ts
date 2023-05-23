import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("specifications", (table) => {
    table.primary(["id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("specifications", (table) => {
    table.dropColumn("id");
  });
}

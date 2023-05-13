import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().notNullable();
    table.text("name").notNullable();
    table.text("password").notNullable();
    table.text("email").notNullable();
    table.text("driver_license").notNullable().unique();
    table.boolean("admin").defaultTo(false).notNullable();
    table.text("avatar");
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}

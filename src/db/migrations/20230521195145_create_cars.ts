import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cars", (table) => {
    table.uuid("id").primary().notNullable();
    table.text("name").notNullable();
    table.text("description");
    table.double("daily_rate").notNullable();
    table.boolean("availability").notNullable().defaultTo(true);
    table.text("license_plate").notNullable();
    table.double("fine_amount").notNullable().defaultTo(0);
    table.text("brand");
    table.uuid("category_id").references("id").inTable("categories");
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("cars");
}

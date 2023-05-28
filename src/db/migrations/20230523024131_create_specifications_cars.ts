import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("specifications_cars", (table) => {
    table.uuid("car_id").references("id").inTable("cars").notNullable();
    table
      .uuid("specifications_id")
      .references("id")
      .inTable("specifications")
      .notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("specifications_cars");
}

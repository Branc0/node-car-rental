import knex from "knex";

export const config = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "docker",
    password: "admin",
    database: "db",
  },
  migrations: {
    extension: "ts",
    directory: "./src/db/migrations",
  },
  searchPath: ["knex", "public"],
};

export const db = knex(config);

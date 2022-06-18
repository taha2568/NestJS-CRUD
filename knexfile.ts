import type { Knex } from "knex";

export const config = {
  client: 'postgresql',
      connection: {
  database: 'nest-crud',
      user: 'postgres',
      password: '13808013'
},
  pool: {
    min: 2,
        max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }

};

// module.exports = config;

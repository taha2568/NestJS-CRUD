export function up(knex) {
  return knex.schema.createTable('product', function(table){
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();
      table.string('company').notNullable();
      table.string('country').notNullable();
      table.string('color').notNullable();
      table.string('type').nullable();
      table.decimal('price');
      table.string('description').nullable();
      table.datetime('createdAt').notNullable();
      table.datetime('updatedAt').notNullable();
      table.datetime('deletedAt').nullable();
  })
}

export function down(knex) {
   return knex.schema.dropTable('product');
}

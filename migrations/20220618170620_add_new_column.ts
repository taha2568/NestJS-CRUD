import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('product', function(table){
        table.string('features').nullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('product', function(table){
        table.dropColumn('features');
    })
}


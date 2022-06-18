import {Model} from 'objection';

export class Product extends Model {
    static get tableName(): string {
        return 'product';
    }
    static get idColumn() {
        return 'id';
    }
}
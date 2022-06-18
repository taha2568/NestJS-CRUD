import {Injectable, Body} from '@nestjs/common';
import {Product} from '../models/Product';
import {Product as ProductInterface} from '../models/product.interface';

@Injectable()
export class ProductService {

    async findAllProducts() {
        const products = await Product.query();
        console.log(products);
        return products;
    }

    async findSpecificProduct(id: number) {
        let product = await Product.query().findById(id);
        console.log(product);
        return product;
    }

    async addProduct(newProduct: ProductInterface) {
        let createdAt = new Date();
        let updatedAt = createdAt;
        const product = await Product.query().insert({
            name: newProduct.name,
            company: newProduct.company,
            country: newProduct.country,
            color: newProduct.color,
            type: newProduct.type,
            price: newProduct.price,
            description: newProduct.description,
            createdAt: createdAt,
            updatedAt: updatedAt
        });
        console.log(product);
        return product;
    }

    async deleteProduct(id: number) {
        let condition = await Product.query().deleteById('id');
        return condition;

    }
}

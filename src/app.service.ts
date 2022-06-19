import {Injectable, Body, HttpException, HttpStatus} from '@nestjs/common';
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
        if(product === undefined) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return product;
    }

    async addProduct(newProduct: ProductInterface) {
        try {
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
        }catch(error){
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteProduct(id: number) {
        let number_of_deleted_product = await Product.query().deleteById('id');
        if(!number_of_deleted_product) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

    }

    async updateProduct(id: number, updatedProperties: ProductInterface){
        let number_of_updated_product = Product.query()
            .findById(id)
            .patch(updatedProperties);
        if(!number_of_updated_product) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
    }
}

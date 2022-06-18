import {Body, Controller, Delete, Get, Param, Patch, Post, Res} from '@nestjs/common';
import {ProductService} from './app.service';
import {Product as ProductInterface} from "../models/product.interface";
import {Response} from 'express';


@Controller()
export class AppController {
    constructor(private readonly productService: ProductService) {
    }

    @Get()
    async findAll() {
        console.log('Request: Get All Products');
        return this.productService.findAllProducts();
    }

    @Get(':id')
    async findSpecificProduct(@Param('id') id) {
        console.log('Request: Get Specific Product');
        return this.productService.findSpecificProduct(id);
    }

    @Post()
    async addNewProduct(@Body() productDTO: ProductInterface, @Res() res: Response) {
        console.log('Request: Add a new product');
        let condition = this.productService.addProduct(productDTO);

        if (condition) {
            res.status(200).json({msg: 'the product has been created'});
        }
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id, @Res() res: Response) {
        console.log('Request: Delete an specific product')
        let condition = this.productService.deleteProduct(id);

        if (condition) {
            res.status(400).json({msg: "the product has been deleted"})
        }
    }

    @Patch()
    async updateProduct(@Body() productDTO: ProductInterface){
        console.log('Request: Update an specific product');

    }

}

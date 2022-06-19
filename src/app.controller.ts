import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Res,
    UseFilters, UsePipes, ValidationPipe,
} from '@nestjs/common';
import {ProductService} from './app.service';
import {Product as ProductInterface} from "../models/product.interface";
import {UpdateDTO} from '../models/update.product.interface';
import {Response} from 'express';
import {HttpExceptionFilter} from './exception.filter';


@Controller()
@UseFilters(HttpExceptionFilter)
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
    @UsePipes(new ValidationPipe())
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
        let condition = this.productService.deleteProduct(id); ///await here
        res.status(400).json({msg: "the product has been deleted"})
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateProduct(@Body() updatedProperties: UpdateDTO, @Param('id') id, @Res() res: Response) {
        console.log('Request: Update an specific product');
        await this.productService.updateProduct(id, updatedProperties);
        res.status(200).json({msg: `the new properties have been set for product with id ${id}`});
    }

}

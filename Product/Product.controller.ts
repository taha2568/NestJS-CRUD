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
import {ProductService} from './Product.service';
import {Product as ProductInterface} from "../models/create.product.dto";
import {UpdateDTO} from '../models/update.product.dto';
import {Response} from 'express';
import {HttpExceptionFilter} from './Product.filter';
import {ApiOperation, ApiTags} from "@nestjs/swagger";


@Controller()
@UseFilters(HttpExceptionFilter)
@ApiTags('Product')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Get()
    @ApiOperation({description: "you can fetch all products by this api", summary: 'Get all products'})
    async findAll() {
        console.log('Request: Get All Products');
        return this.productService.findAllProducts();
    }

    @Get(':id')
    @ApiOperation({
        description: "you can fetch specific product by this api",
        summary: 'Get a specific product',
        parameters: [{name: 'id', in: 'query'}]
    })
    async findSpecificProduct(@Param('id') id) {
        console.log('Request: Get Specific Product');
        return this.productService.findSpecificProduct(id);
    }

    @Post()
    @ApiOperation({description: "you can create a new product by this api", summary: 'Create a new product'})
    @UsePipes(new ValidationPipe({
        whitelist: true
    }))
    async addNewProduct(@Body() productDTO: ProductInterface, @Res() res: Response) {
        console.log('Request: Add a new product');
        let condition = this.productService.addProduct(productDTO);

        if (condition) {
            res.status(200).json({msg: 'the product has been created'});
        }
    }

    @Delete(':id')
    @ApiOperation({
        description: 'you can delete a product by this api',
        summary: 'Delete a product',
        parameters: [{name: 'id', in: 'path'}]
    })
    async deleteProduct(@Param('id') id, @Res() res: Response) {
        console.log('Request: Delete an specific product')
        let condition = this.productService.deleteProduct(id); ///await here
        res.status(400).json({msg: "the product has been deleted"})
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({
        whitelist: true
    }))
    @ApiOperation({
        description: 'you can update a product by this api (partial update)',
        summary: 'Update a product (partial update)',
        parameters: [{name: 'id', in: 'path'}]
    })
    async updateProduct(@Body() updatedProperties: UpdateDTO, @Param('id') id, @Res() res: Response) {
        console.log('Request: Update an specific product');
        await this.productService.updateProduct(id, updatedProperties);
        res.status(200).json({msg: `the new properties have been set for product with id ${id}`});
    }

}

import { Controller, Get, Post, Param, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Create a new product
  @Post()
  async create(@Body() createProductDto: { name: string; price: number }): Promise<Product> {
    return this.productsService.create(createProductDto);
  }


  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }


  @Get(':id')
async findOne(@Param('id') id: number): Promise<Product> {
  const product = await this.productsService.findOne(id);
  if (!product) {
    throw new NotFoundException(`Product with ID ${id} not found`);
  }
  return product;
}



  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: { name?: string; price?: number }): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }


  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Product> {
    return this.productsService.remove(id);
  }
}

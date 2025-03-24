import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Body,
  ParseFilePipe,
  FileTypeValidator,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'string',
          description: 'Product data in JSON format (stringified CreateProductDto)',
          example: JSON.stringify(
            {
              "bgColor":"bg-[#2D241F]",
              "name": "Product Name", 
              "price": "Product Price", 
              "category": "Product category", 
              "discountActive": false, 
              "discountValue": "0"
            }
          ),
        },
        file: {
          type: 'string',
          format: 'binary',
          description: 'Product image file',
        },
      },
    },
  })
  async create(
    @Body('data') data: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/*' })],
      }),
    )
    file?: Express.Multer.File,
  ) {
    const productData: CreateProductDto = JSON.parse(data);
    return this.productService.create(productData, file);
  }
  

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        data: { type: 'string', description: 'Updated product data in JSON format (stringified UpdateProductDto)' },
        file: { type: 'string', format: 'binary', description: 'New product image file' },
      },
      example: {
        data: `{"name":"Updated Product","description":"Updated description.","price":39.99,"stock":50}`,
      },
    },
  })
  @ApiParam({ name: 'id', type: 'number', description: 'Product ID' })
  async update(
    @Param('id') id: number,
    @Body('data') data: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/*' })],
      }),
    )
    file?: Express.Multer.File,
  ) {
    const productData: UpdateProductDto = JSON.parse(data);
    return this.productService.update(id, productData, file);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'Product ID' })
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'Product ID' })
  async remove(@Param('id',ParseIntPipe)  id: number) {
    return this.productService.remove(id);
  }
}

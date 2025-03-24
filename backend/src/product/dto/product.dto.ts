import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Sample Product', description: 'Name of the product' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'This is a sample product description.', description: 'Product description' })
  @IsString()
  description: string;

  @ApiProperty({ example: 29.99, description: 'Product price' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 100, description: 'Stock quantity' })
  @IsNumber()
  stock: number;
}

export class UpdateProductDto {
  @ApiProperty({ example: 'Updated Product', description: 'Updated name of the product', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Updated description.', description: 'Updated product description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 39.99, description: 'Updated price', required: false })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 50, description: 'Updated stock quantity', required: false })
  @IsNumber()
  @IsOptional()
  stock?: number;
}

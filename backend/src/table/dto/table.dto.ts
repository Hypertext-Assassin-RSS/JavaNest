import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({ example: 1, description: 'Table number' })
  @IsNumber()
  number: number;

  @ApiProperty({ example: 4, description: 'Table capacity' })
  @IsNumber()
  capacity: number;
}

export class UpdateTableDto {
  @ApiProperty({ example: 4, description: 'Updated table capacity', required: false })
  @IsNumber()
  @IsOptional()
  capacity?: number;
}

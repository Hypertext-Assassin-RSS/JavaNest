import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDeliveryDto {
  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  trackingNumber?: string;

  @IsOptional()
  @IsInt()
  customerId?: number;
}

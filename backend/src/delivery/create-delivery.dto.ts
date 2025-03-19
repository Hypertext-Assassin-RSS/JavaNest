

import { IsInt, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateDeliveryDto {
  @IsInt()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsString()
  trackingNumber?: string;

  @IsInt()
  customerId: number;
}

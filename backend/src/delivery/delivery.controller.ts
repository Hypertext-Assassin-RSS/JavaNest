import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  async create(@Body() deliveryData) {
    console.log(deliveryData);
    
    return this.deliveryService.create(deliveryData);
  }

  @Get()
  async findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return this.deliveryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id',ParseIntPipe) id: number, @Body() updateData) {
    return this.deliveryService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id',ParseIntPipe) id: number) {
    return this.deliveryService.remove(id);
  }
}

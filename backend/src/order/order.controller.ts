import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { OrdersService } from './order.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}


  @Post('checkout/:userId')
  async checkout(@Param('userId') userId: number, @Body('cartItems') cartItems: any[]) {
    return this.ordersService.checkout(userId, cartItems);
  }


  @Get('user/:userId')
  async getOrdersByUser(@Param('userId') userId: number) {
    return this.ordersService.getOrdersByUser(userId);
  }


  @Get(':id')
  async getOrderById(@Param('id') id: number) {
    return this.ordersService.getOrderById(id);
  }


  @Patch(':id/status')
  async updateOrderStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.ordersService.updateOrderStatus(id, status);
  }


  @Delete(':id')
  async deleteOrder(@Param('id') id: number) {
    return this.ordersService.deleteOrder(id);
  }
}

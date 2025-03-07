import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}


  async createOrder(userId: number, items: any[], totalAmount: number): Promise<Order> {
    return this.prisma.order.create({
      data: {
        userId,
        items,
        totalAmount,
        status: 'pending',
      },
    });
  }


  async getOrdersByUser(userId: number): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }


  async getOrderById(id: number): Promise<Order | null> {
    return this.prisma.order.findUnique({ where: { id } });
  }


  async updateOrderStatus(id: number, status: string): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }


  async deleteOrder(id: number): Promise<Order> {
    return this.prisma.order.delete({ where: { id } });
  }


  async checkout(userId: number, cartItems: any[]): Promise<Order> {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return this.createOrder(userId, cartItems, totalAmount);
  }
}


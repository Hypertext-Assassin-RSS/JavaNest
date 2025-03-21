import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}


  async getAvailableTables(date: string) {
    const bookedTables = await this.prisma.booking.findMany({
      where: { date: new Date(date) },
      select: { tableId: true },
    });

    const bookedTableIds = bookedTables.map((b) => b.tableId);

    return this.prisma.table.findMany({
      where: { id: { notIn: bookedTableIds } },
    });
  }


  async createBooking(data: any) {
    return this.prisma.booking.create({ data });
  }

  async getAllBookings() {
    return this.prisma.booking.findMany();
  }

  async getBookingByPhone(phone: string) {
    return this.prisma.booking.findMany({
      where: { phone:phone },
    });
  }

  async updateBookingByPhone(phone: string, updateData: any) {
    return this.prisma.booking.updateMany({
      where: { phone:phone },
      data: updateData,
    });
  }


  async deleteBookingByPhone(phone: string) {
    return this.prisma.booking.deleteMany({
      where: { phone:phone },
    });
  }
}

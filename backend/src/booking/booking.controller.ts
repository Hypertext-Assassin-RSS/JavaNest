import { Controller, Get, Post, Patch, Delete, Body, Query, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}


  @Get('available')
  getAvailableTables(@Query('date') date: string) {
    return this.bookingService.getAvailableTables(date);
  }


  @Post()
  createBooking(@Body() bookingData) {
    return this.bookingService.createBooking({
      name: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email,
      date: new Date(bookingData.date),
      notes: bookingData.notes,
      table: { connect: { id: parseInt(bookingData.tableId, 10) } },
    });
  }


  @Get()
  getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @Get(':phone')
  getBookingByPhone(@Param('phone') phone: string) {
    return this.bookingService.getBookingByPhone(phone);
  }


  @Patch(':phone')
  updateBookingByPhone(@Param('phone') phone: string, @Body() updateData) {
    return this.bookingService.updateBookingByPhone(phone, updateData);
  }


  @Delete(':phone')
  deleteBookingByPhone(@Param('phone') phone: string) {
    return this.bookingService.deleteBookingByPhone(phone);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { S3Service } from './s3/s3.service';
import { S3Module } from './s3/s3.module';
import { OrdersService } from './order/order.service';
import { OrdersController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookingService } from './booking/booking.service';
import { BookingController } from './booking/booking.controller';
import { BookingModule } from './booking/booking.module';
import { TableController } from './table/table.controller';
import { TableService } from './table/table.service';
import { TableModule } from './table/table.module';

@Module({
  imports: [ProductModule, S3Module, OrderModule, UserModule, AuthModule, BookingModule, TableModule],
  controllers: [AppController, ProductController, OrdersController, UserController, BookingController, TableController],
  providers: [AppService, PrismaService, ProductService, S3Service, OrdersService, UserService, BookingService, TableService],
})
export class AppModule {}

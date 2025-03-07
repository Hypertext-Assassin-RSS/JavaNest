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

@Module({
  imports: [ProductModule, S3Module, OrderModule, UserModule, AuthModule],
  controllers: [AppController, ProductController, OrdersController, UserController],
  providers: [AppService, PrismaService, ProductService, S3Service, OrdersService, UserService],
})
export class AppModule {}

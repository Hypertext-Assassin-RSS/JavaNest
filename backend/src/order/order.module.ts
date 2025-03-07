import { Module } from '@nestjs/common';
import { OrdersController } from './order.controller';
import { OrdersService } from './order.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers:[OrdersController],
    providers:[OrdersService,PrismaService],
    exports:[OrdersService]
})
export class OrderModule {}

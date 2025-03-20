import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeliveryService {
    constructor(private prisma:PrismaService){}
    async  create(deliveryData: any) {
        const customer = await this.prisma.customer.findUnique({
          where: { email: deliveryData.customer.email },
        });

        if (!customer) {
            return this.prisma.delivery.create({
                data: {
                    address: deliveryData.address,
                    status: "pending",
                    customer: {
                      connectOrCreate: {
                        where: {
                          email: deliveryData.customer.email,
                        },
                        create: {
                          name: deliveryData.customer.name,
                          email: deliveryData.customer.email,
                          mobile: deliveryData.customer.mobile,
                        },
                      },
                    },
                  },
            })
        } else {
            return this.prisma.delivery.create({
                data: {
                    address: deliveryData.address,
                    status: "pending",
                    customer: {
                        connect: {
                            id: customer.id,
                        },
                    },
                },
            });
        }
         
      }
      

    async findAll() {
        return this.prisma.delivery.findMany();
    }

    async findOne(id: number) {
        return this.prisma.delivery.findUnique({ where: { id: id } });
    }

    async update(id: number, updateData: any) {
        return this.prisma.delivery.update({ where: { id: id }, data: updateData });
    }

    async remove(id: number) {
        return this.prisma.delivery.delete({ where: { id: id } });
    }
}

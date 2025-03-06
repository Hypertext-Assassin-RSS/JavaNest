import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { S3Service } from '../s3/s3.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private s3Service: S3Service) {}

  async create(data: any, file?: Express.Multer.File) {
    let imageUrl = data.imageUrl;
    if (file) {
      imageUrl = await this.s3Service.uploadFile(file);
    }

    const discountValue = data.discountActive ? data.discountValue : null;

    return this.prisma.product.create({
      data: {
        ...data,
        id: undefined,
        imageUrl,
        discountValue,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: string, data: any, file?: Express.Multer.File) {
    let imageUrl = data.imageUrl;
    if (file) {
      imageUrl = await this.s3Service.uploadFile(file);
    }

    const discountValue = data.discountActive ? data.discountValue : null;

    return this.prisma.product.update({
      where: { id },
      data: {
        ...data,
        imageUrl,
        discountValue,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}

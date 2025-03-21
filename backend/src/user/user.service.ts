import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}
    
    async createUser(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.prisma.user.create({
          data: { email, password: hashedPassword },
        });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(email: string) {
        return this.prisma.user.findUnique({where : { email : email}})
    }

    async update(email: string, data: { email?: string; password?: string }) {
        if (data.password) {
          data.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
          where: { email:email },
          data,
        });
      }

      async delete(email: string) {
        return this.prisma.user.delete({where:{ email:email }})
    }
}

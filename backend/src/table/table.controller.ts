import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('tables')
export class TableController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createTable(@Body() data: { number: number; capacity: number }) {
    return this.prisma.table.create({ data });
  }

  @Get()
  async getAllTables() {
    return this.prisma.table.findMany();
  }

  @Get(':id')
  async getTable(@Param('id') id: string) {
    return this.prisma.table.findUnique({ where: { id: Number(id) } });
  }

  @Patch(':id')
  async updateTable(@Param('id') id: string, @Body() data: { capacity?: number }) {
    return this.prisma.table.update({ where: { id: Number(id) }, data });
  }

  @Delete(':id')
  async deleteTable(@Param('id') id: string) {
    return this.prisma.table.delete({ where: { id: Number(id) } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Table } from '@prisma/client';

@Injectable()
export class TableService {
  constructor(private prisma: PrismaService) {}

  async createTable(data: { number: number; capacity: number }): Promise<Table> {
    return this.prisma.table.create({ data });
  }


  async getAllTables(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }


  async getTableById(id: number): Promise<Table | null> {
    return this.prisma.table.findUnique({ where: { id } });
  }

  async updateTable(id: number, data: { capacity?: number }): Promise<Table> {
    return this.prisma.table.update({ where: { id }, data });
  }


  async deleteTable(id: number): Promise<Table> {
    return this.prisma.table.delete({ where: { id } });
  }
}

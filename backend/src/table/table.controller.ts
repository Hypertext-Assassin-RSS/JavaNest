import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateTableDto, UpdateTableDto } from './dto/table.dto';

@Controller('tables')
export class TableController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @ApiBody({ type: CreateTableDto })
  async createTable(@Body() data: CreateTableDto) {
    return this.prisma.table.create({ data });
  }

  @Get()
  async getAllTables() {
    return this.prisma.table.findMany();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'Table ID' })
  async getTable(@Param('id') id: string) {
    return this.prisma.table.findUnique({ where: { id: Number(id) } });
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'Table ID' })
  @ApiBody({ type: UpdateTableDto })
  async updateTable(@Param('id') id: string, @Body() data: UpdateTableDto) {
    return this.prisma.table.update({ where: { id: Number(id) }, data });
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'Table ID' })
  async deleteTable(@Param('id') id: string) {
    return this.prisma.table.delete({ where: { id: Number(id) } });
  }
}

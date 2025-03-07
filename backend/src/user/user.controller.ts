import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}


    @Post()
    async create(@Body() body:{email:string , password:string}){
        return this.userService.createUser(body.email, body.password);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':email')
    async findOne(@Param('email') email: string) {
        return this.userService.findOne(email);
    }

    @Patch(':email')
    async update(
    @Param('email') email: string,
    @Body() body: { email?: string; password?: string }) {
    return this.userService.update(email, body);
  }

    @Delete(':email')
    async delete(@Param('email') email: string){
        return this.userService.delete(email);
    }
}

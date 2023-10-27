import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/CreateUserDto.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly userService: UsersService,
  ) {}
  @Post('create')
  creatUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}

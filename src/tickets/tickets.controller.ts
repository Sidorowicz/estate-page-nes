import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Inject,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTicketDto } from 'src/dto/CreateTicketDto';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(
    @Inject('TICKETS_SERVICE') private readonly userService: TicketsService,
  ) {}

  @Post(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  creatTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.userService.creatTicket(createTicketDto);
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  updateTicket(
    @Param('id') id: number,
    @Body() createTicketDto: CreateTicketDto,
  ) {
    return this.userService.updateTicket(id, createTicketDto);
  }

  @Delete(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  deleteTicket(@Param('id') id: number) {
    return this.userService.deleteTicket(id);
  }
}

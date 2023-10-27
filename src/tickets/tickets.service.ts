import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTicketDto } from 'src/dto/CreateTicketDto';
import { UpdateTicketDto } from 'src/dto/UpdateTicketDto';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  creatTicket(createTicketDto: CreateTicketDto) {
    const newTicket = this.ticketRepository.create(createTicketDto);
    return this.ticketRepository.save(newTicket);
  }

  updateTicket(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepository.update({ id }, updateTicketDto);
  }

  deleteTicket(id: number) {
    return this.ticketRepository.delete(id);
  }
}

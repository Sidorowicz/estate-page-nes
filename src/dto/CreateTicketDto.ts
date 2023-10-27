import { IsNotEmpty, Length } from 'class-validator';

export class CreateTicketDto {
  id: number;

  @IsNotEmpty({ message: 'Contact info is required' })
  contact: string;

  @IsNotEmpty({ message: 'Name is required' })
  @Length(3, 40)
  name: string;

  @IsNotEmpty({ message: 'Message is required' })
  @Length(5)
  content: string;
}

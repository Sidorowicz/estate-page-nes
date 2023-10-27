import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contact: string;

  @Column()
  name: string;

  @Column()
  content: string;
}

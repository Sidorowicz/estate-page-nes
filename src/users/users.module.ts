import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [{ provide: 'USERS_SERVICE', useClass: UsersService }],
  controllers: [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}

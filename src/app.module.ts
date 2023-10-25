import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesModule } from './houses/houses.module';
import { GalleryModule } from './gallery/gallery.module';

@Module({
  imports: [HousesModule, GalleryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

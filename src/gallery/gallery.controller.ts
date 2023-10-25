import { Controller, Get } from '@nestjs/common';

const images = [
  {
    id: 1,
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
  },
];

@Controller('gallery')
export class GalleryController {
  @Get()
  getAll() {
    return images;
  }
}

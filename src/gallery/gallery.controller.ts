import { Controller, Get } from '@nestjs/common';

const images = [
  {
    id: 1,
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
  },
  {
    id: 2,
    image:
      '  https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg',
  },
  {
    id: 3,
    image:
      'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    image:
      'https://modernhouse-projekty.pl/wp-content/uploads/2023/07/Projekt_domu_z_dachem_dwuspadowym_i_garazem_NewHouse_759w1_17_nowoczesna_stodola-768x768.jpg',
  },
  {
    id: 6,
    image:
      'https://wallpapers.com/images/hd/beautiful-house-pictures-gi9u23e95gi8iu2e.jpg',
  },
];

@Controller('gallery')
export class GalleryController {
  @Get()
  getAll() {
    return images;
  }
}

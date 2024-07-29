import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../assets/gallery/img_1.jpg';
import slide_image_2 from '../../assets/gallery/img_2.jpg';
import slide_image_3 from '../../assets/gallery/img_3.jpg';
import slide_image_4 from '../../assets/gallery/img_4.jpg';
import slide_image_6 from '../../assets/gallery/img_6.jpg';
import slide_image_7 from '../../assets/gallery/img_7.jpg';
import slide_image_8 from '../../assets/gallery/img_8.jpg';
import slide_image_9 from '../../assets/gallery/img_9.jpg';
import slide_image_10 from '../../assets/gallery/img_10.jpg';

import './gallery.style.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">GALLERY</h1>
      <hr />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={600}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {[slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_6, slide_image_7, slide_image_8, slide_image_9, slide_image_10].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;

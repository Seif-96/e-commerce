'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Slider({
  spaceBetween = 0,
  sliderPerView = 1,
  listOfImages,
  height,
}: {
  spaceBetween?: number;
  sliderPerView?: number;
  listOfImages: string[];
  height: string;
}) {
  return (
    <Swiper
      className={height}
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={spaceBetween}
      slidesPerView={sliderPerView}
      navigation
    >
      {listOfImages.map((src) => (
        <SwiperSlide key={src}>
          <Image
            className="w-full h-full object-cover"
            src={src}
            width={500}
            height={100}
            alt={src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

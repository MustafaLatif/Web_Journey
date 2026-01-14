'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';   
import { Navigation } from 'swiper/modules';  
const NavbarInfoSlider = () => {
  return (
    <div className="w-full mb-6 flex justify-center overflow-x-hidden">
      <div className="mt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}  // Enable navigation functionality
          modules={[Navigation]}  // Pass Navigation module to Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white w-full max-w-[300px] text-black rounded-xl flex flex-col justify-between items-center mx-2 p-4 shadow-lg border">
                <div className="rounded-t-xl">
                  <h2 className="text-black font-bold text-[12px]">
                    <strong>{d.name}</strong>
                  </h2>
                  <div className="flex justify-center">
                    <img className="w-12 h-8 object-contain mr-4 p-1" src={d.img} alt={d.name} />
                    <img className="w-12 h-8 object-contain mr-4 p-1" src={d.img1} alt={d.name} />
                  </div>
                  <p className="text-[10px]">{d.description}</p>
                  <hr className="border border-gray-300 my-2" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const data = [
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/pk.webp',
    img1: 'https://flagpedia.net/data/flags/h80/af.png?v=un',
    description: 'Pakistan women choose to field',
  },
  {
    name: 'Live',
    img: 'https://flagpedia.net/data/flags/h80/pk.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gb-nir.webp',
    description: 'Pakistan won by 7 wickets',
  },
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/af.png?v=un',
    img1: 'https://flagpedia.net/data/flags/h80/dz.webp',
    description: 'Afghanistan won by 200 runs',
  },
  {
    name: 'No Result',
    img: 'https://flagpedia.net/data/flags/h80/nz.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gb-nir.webp',
    description: 'No Result yet',
  },
  {
    name: 'Not covered live',
    img: 'https://flagpedia.net/data/flags/h80/sa.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gs.webp',
    description: 'Abu Dhabi trial by 100 runs',
  },
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/tr.webp',
    img1: 'https://flagpedia.net/data/flags/h80/ae.webp',
    description: 'Turkey won by 4 wickets',
  },
];

export default NavbarInfoSlider;

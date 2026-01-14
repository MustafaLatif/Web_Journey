'use client'
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const data = [
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/pk.webp',
    img1: 'https://flagpedia.net/data/flags/h80/af.png?v=un',
    description: 'Pakistan women choose to field',
    score: '378 & 167',
        text: '1st Test .Lahore',

  },
  {
    name: 'Live',
    img: 'https://flagpedia.net/data/flags/h80/pk.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gb-nir.webp',
    description: 'Pakistan won by 7 wickets',
    score: '290 & 153',
        text: '1st Test .Lahore',

  },
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/af.png?v=un',
    img1: 'https://flagpedia.net/data/flags/h80/dz.webp',
    description: 'Afghanistan won by 200 runs',
    score: '345 & 112',
    text: '1st Test .Lahore',
  },
  {
    name: 'No Result',
    img: 'https://flagpedia.net/data/flags/h80/nz.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gb-nir.webp',
    description: 'No Result yet',
    score: 'N/A',
    text: '1st Test .Lahore',
  },
  {
    name: 'Not covered live',
    img: 'https://flagpedia.net/data/flags/h80/sa.webp',
    img1: 'https://flagpedia.net/data/flags/h80/gs.webp',
    description: 'Abu Dhabi trial by 100 runs',
    score: 'N/A',
    text: '1st Test .Lahore',
  },
  {
    name: 'Result',
    img: 'https://flagpedia.net/data/flags/h80/tr.webp',
    img1: 'https://flagpedia.net/data/flags/h80/ae.webp',
    description: 'Turkey won by 4 wickets',
    score: '345 & 120',
    text: '1st Test .Lahore',
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCards = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevCards = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const currentCards = data.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative flex flex-col items-center h-40 p-1 bg-[#0398dc]   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 w-lvh ">
        {currentCards.map((card, index) => (
          <div key={index} className="bg-white p-4 h-38 rounded-lg shadow-md cursor-pointer">
            <div className="text-[12px]  ">
              <strong>{card.name}</strong>
              <span className="text-gray-600 pl-2">{card.text}</span>
            </div>
            
              

            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img className="w-4 h-4 mr-2" src={card.img} alt={card.name} />
              </div>

              <div className="flex items-center justify-end">
                <span className="font-semibold text-gray-800 text-[12px]">{card.score}</span>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img className="w-4 h-4 mr-2" src={card.img1} alt={card.name} />
              </div>
              <div className="flex items-center justify-end">
                <span className="font-semibold text-gray-800 text-[12px]">{card.score}</span>
              </div>
            </div>

            <p className="text-[10px] text-gray-600 mb-2">{card.description}</p>

            <hr className="border border-gray-300 my-2" />

            <div className="flex justify-between">
              <a href="#" className=" hover:underline text-[10px]">Schedule</a>
              <a href="#" className=" hover:underline text-[10px]">Report</a>
              <a href="#" className="hover:underline text-[10px]">Series</a>
            </div>

            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-green-600">{card.result}</p>
            </div>
          </div>
        ))}
      </div>

      <ChevronLeft
        onClick={prevCards}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8  bg-white rounded-full text-gray-500 cursor-pointer hover:text-blue-700 disabled:opacity-50"
        disabled={currentIndex === 0}
      />

      <ChevronRight
        onClick={nextCards}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full   text-gray-500 cursor-pointer hover:text-gray-700 disabled:opacity-50"
        disabled={currentIndex + 3 >= data.length}
      />
    </div>
  );
};

export default CardCarousel;

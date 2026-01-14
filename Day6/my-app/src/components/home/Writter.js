'use client'
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const WritterData = [
  {
    id: 1,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/400500/400546.png', 
    title: 'Photo feature: Net flicks  ',
    description: 'Ekanth',
  },
  {
    id: 2,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314662.png',  
    title: 'Ask Steven: Who has the most   ',
    description: 'Steven Lynch',
  },
  {
    id: 3,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314666.png',  
    title: 'Who will be the spear to Usman  ',
    description: 'Greg Chappell',
  },
  {
    id: 4,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/400500/400546.png', 
    title: 'Feature: India’s T20I Journey',
    description: 'Rajesh Kumar',
  },
  {
    id: 5,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314662.png',  
    title: 'Exploring Cricket’s Growth ',
    description: 'Michael Jones',
  },
  {
    id: 6,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314666.png',  
    title: 'The Legacy of 2007 World Cup',
    description: 'Alice Cooper',
  },
];

const Writter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItems = () => {
    
    if (currentIndex + 3 >= WritterData.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 3); 
    }
  };

  const currentItems = WritterData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-white p-6 w-full max-w-4xl mx-auto rounded-md shadow-md">
      <h2 className="text-sm font-bold text-gray-900 mb-4 ">Writers</h2>
      <hr className="border border-gray-300 mb-4" />
      
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded-full mb-4" 
              />
              <p className="text-sm text-gray-800 text-center">{item.title}</p>
              <h2 className="text-sm text-[#0398dc] text-center">{item.description}</h2>
            </div>
          ))}
        </div>
        
        <ChevronRight
          onClick={nextItems}
          className="w-8 h-8 text-blue-500 cursor-pointer hover:text-blue-700 ml-4"
          disabled={WritterData.length <= 3} 
        />
      </div>
    </div>
  );
};

export default Writter;

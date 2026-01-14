'use client'
import Link from 'next/link';
import React from 'react';

const PhotosData = [
  {
    id: 1,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/335600/335673.6.jpg',
    title: 'Photo feature: Net flicks and drill World Cups?',
    description: 'Ekanth',
  },
  {
    id: 2,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/407800/407867.6.jpg',
    title: 'Photo feature: Net flicks and drill World Cups?',
    description: 'Ekanth',
  },
  {
    id: 3,
    image: ' https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/407800/407865.jpg',
    title: 'Who has the most runs in Women\'s World Cups?',
    description: 'Steven Lynch',
  },
  {
    id: 4,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/407200/407233.6.jpg',
    title: 'Who has the most runs in Women\'s World Cups?',
    description: 'Steven Lynch',
  },
  {
    id: 5,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/372300/372328.6.jpg',
    title: 'Who will be the spear to Usman shield for Australia?',
    description: 'Greg Chappell',
  },
];

const PicData = () => {
  return (
    <div className="bg-white p-6 w-full max-w-4xl mx-auto m-6 rounded-md shadow-md">
      <h2 className="text-sm font-bold text-gray-900">Photos</h2>
      
       <Link href="/see-all" className="text-sm  text-[#0398dc] self-end mt-2 inline-block">
        See all
      </Link>

      <hr className="border border-gray-300 my-4" />

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         <div className="space-y-4">
          {PhotosData.slice(0, 2).map((item) => (
            <div key={item.id} className="w-full h-40 bg-cover rounded-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
          ))}
        </div>

         <div className="col-span-1 sm:col-span-2 lg:col-span-1 w-full h-80 bg-cover object-cover  rounded-lg" style={{ backgroundImage: `url(${PhotosData[2].image})` }}></div>
        
         <div className="sm:col-span-1 lg:col-span-1 space-y-4">
          {PhotosData.slice(3, 5).map((item) => (
            <div key={item.id} className="w-full h-40 bg-cover rounded-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PicData;

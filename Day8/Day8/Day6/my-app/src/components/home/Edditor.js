'use client'
import Link from 'next/link';
import React from 'react';

const EdditorData = [
  {
    id: 1,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/335600/335673.6.jpg', 
    title: 'Photo feature: Net flicks and drill World Cups?',
    description: 'Ekanth',
  },
  {
    id: 2,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/407200/407233.6.jpg',  
    title: 'Who has the most runs in Women\'s World Cups?',
    description: 'Steven Lynch',
  },
  {
    id: 3,
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/372300/372328.6.jpg',  
    title: 'Who will be the spear to Usman shield for Australia?',
    description: 'Greg Chappell',
  },
];

const Edditor = () => {
  return (
    <div className="bg-white p-4 w-full max-w-4xl mx-auto m-6 rounded-md shadow-md">
      <h2 className="text-sm font-bold text-gray-900 ">Editor&apos;s Picks</h2>
      <Link href="/see-all" className="flex justify-end text-sm text-[#0398dc]">See all</Link>
      <hr className="border border-gray-300 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {EdditorData.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-lg rounded-md">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-sm mb-4" />
            <p className="text-gray-800 text-sm">{item.title}</p>
            <h2 className="text-sm text-[#0398dc]">{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edditor;

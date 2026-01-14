'use client'
import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';  

const MostRead = () => {
  const MostReadItems = [
    "Nepal, Oman qualify for 2026 T20 World Cup",
    "Stuart Broad: 'Worst Australian team since 2010-11'",
    "TNT Sports turn to cycling and rugby commentators  ",
    "Shami: If I can play Ranji Trophy, I can play 50-overs",
    "Rashid becomes No. 1 ranked bowler in ODIs"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md relative flex justify-end w-80 mr-2 transition-colors duration-300"> 
      <div className="w-85"> 
        <h2 className="text-[#0398dc] dark:text-blue-400 text-sm font-bold mb-4">Most Read</h2>
        <hr className="border border-gray-300 dark:border-gray-600 mb-4" />
        
        <div className="space-y-6">
          {MostReadItems.map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-lg h-[9px] transition-colors duration-300">  
              <ChevronRight className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <Link href={`#link${index}`} className="text-[11px] font-light text-black dark:text-white">
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostRead;

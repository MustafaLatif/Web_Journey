'use client'
import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';  

const Spotlight = () => {
 const spotlightItems = [
  "SIR JIMMY ANDERSON UNVEILS DP WORLD'S SUPPORT FOR GRASSROOTS AT HOME OF CRICKET".toLowerCase(),
  "Chennai Super Kings (CSK) - A Legacy of Glory, Grit & Comebacks".toLowerCase(),
  "DP WORLD AND CHRIS GAYLE DELIVER KITS AND CHANGING ROOM FOR BARBADOS GIRLS CRICKET CLUB".toLowerCase(),
  "DP WORLD BRINGS BEYOND BOUNDARIES INITIATIVE TO THE USA".toLowerCase(),
  "DP WORLD BECOMES ICC TOP TIER PARTNER TO DELIVER CRICKET AT EVERY LEVEL".toLowerCase()
];


  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md relative w-130 transition-colors duration-300">
      <h2 className="text-[#0398dc] dark:text-blue-400 text-sm font-bold mb-2">Spotlight</h2>
      <hr className="border border-gray-300 dark:border-gray-600 mb-4" />
      
      <div className="space-y-4">
        {spotlightItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-lg transition-all duration-300">
            <ChevronRight className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            <Link href={`#link${index}`} className="text-[11px] font-light text-black dark:text-white">
              {item}
            </Link>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Spotlight;

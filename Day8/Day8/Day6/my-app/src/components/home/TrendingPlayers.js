import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const TrendingPlayers = () => {
  return (
    <div className="flex justify-center items-center mt-0">
      <div className='bg-white dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-300'>
        <h2 className='text-black dark:text-white font-bold text-sm'>Trending Players</h2>
        <hr className='border border-gray-300 dark:border-gray-600 my-2' />

        <div className="flex justify-center items-center space-x-8 p-2 text-[10px]">
          <div className="flex space-x-6">
            <Link href="/Women's World Cup 2025" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Women's World Cup 2025
              <ChevronRight className='w-4 h-4' />
            </Link>
            <Link href="/Women's World Cup schedule" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Women's World Cup schedule
              <ChevronRight className='w-4 h-4' />
            </Link>
            <Link href="/women's world cup" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Women's World Cup(2)
              <ChevronRight className='w-4 h-4' />
            </Link>
            <Link href="/Pak women's fixtures" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Pak women's fixtures
              <ChevronRight className='w-4 h-4' />
            </Link>

            <br />
            <br />

            <Link href="/ICC team rankings" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              ICC team rankings
              <ChevronRight className='w-4 h-4' />
            </Link>

            <Link href="/ICC player rankings" className="font-light text-black dark:text-white rounded-full border-1 border-gray-400 dark:border-gray-600 p-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              ICC player rankings
              <ChevronRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPlayers;

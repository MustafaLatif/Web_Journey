import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const SecondaryNav = () => {
  return (
    <nav className="flex justify-center items-center space-x-8 py-2 text-gray-600 text-[9px] ">
      <div className="flex space-x-6  ">
        <Link href="/Women's World Cup 2025" className="font-medium  rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          Women's World Cup 2025
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/Women's World Cup schedule" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          Women's World Cup schedule
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/women's world cup" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          Women's World Cup(2)
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/Pak women's fixtures" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          Pak women's fixtures
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/ICC team rankings" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          ICC team rankings
          <ChevronRight className='w-4 h-4' />
        </Link>
        
        <Link href="/ICC player rankings" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          ICC player rankings
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/Ask Cricinfo" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          Ask Cricinfo
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/2000-2025" className="font-medium rounded-full border-1 border-gray-300 p-1 flex items-center justify-center dark:bg-white dark:text-gray-800">
          2000-2025
          <ChevronRight className='w-4 h-4' />
        </Link>
      </div>
    </nav>
  )
}

export default SecondaryNav;

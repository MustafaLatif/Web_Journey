import React from 'react'
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const KeySeries = () => {
  return (
    <div className='w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 m-6 p-6 rounded-md shadow-md transition-colors duration-300'>
      <h2 className='text-black dark:text-white font-bold text-sm mb-4'>Key Series</h2>
      <hr className='border border-gray-300 dark:border-gray-600 mb-4' />

      <div className="flex flex-wrap justify-center gap-6 text-black dark:text-white text-[10px]">
        <Link href="/AsiaCup 2025" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>Asia Cup 2025</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/icc women's world cup" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>Icc Women's World Cup</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/india vs australia A" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>India vs Australia A</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/new zealand vs england" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>New Zealand vs England</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/country division 2" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>Country division 2</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/country division 1" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>Country division 1</span>
          <ChevronRight className='w-4 h-4' />
        </Link>
          <Link href="/india vs australia A" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>India vs Australia A</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/new zealand vs england" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>New Zealand vs England</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        <Link href="/country division 2" className="font-light text-black dark:text-white rounded-full border border-gray-400 dark:border-gray-600 p-2 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <span>Country division 2</span>
          <ChevronRight className='w-4 h-4' />
        </Link>
      </div>
    </div>
  )
}

export default KeySeries;

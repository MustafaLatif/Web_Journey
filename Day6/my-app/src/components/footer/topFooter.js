import React from 'react'

const TopFooter = () => {
  return (
    <div className='bg-black dark:bg-gray-900 flex justify-center items-center flex-col h-60 transition-colors duration-300'>
      <span className='text-white font-bold  text-4xl '>,,</span>
      <h4 className='text-white '>First and foremost, I need one</h4>
      <p className='text-white'><strong>Gautam Gambhir</strong>was asked if captain Shubman Gill could benefit from having a mental-conditioning coach, but Gambhir had another candidate in mind</p>
    <ul className='flex space-x-4 mb-4'>
      <li className='text-gray-400 dark:text-gray-500 text-sm cursor-pointer hover:text-gray-300 dark:hover:text-gray-400'>Share</li>
      <span className='text-white'>.</span>
      <li className='text-gray-400 dark:text-gray-500 text-sm cursor-pointer hover:text-gray-300 dark:hover:text-gray-400'>See All</li>
      </ul>
    </div>
  )
}

export default TopFooter

'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Moon, Sun, Bell, Search, MoreVertical } from 'lucide-react'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);


    useEffect(() => {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(userPrefersDark);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);


    return (
        <nav className='bg-[#03a9f4] text-white sticky top-0 z-50 h-10'>
            <div className='mx-auto max-w-7xl flex justify-between items-center px-4 '>
                <div className='flex items-center '>
                    <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="Logo" className='h-5  object-cover' />
                </div>

                <div className='flex space-x-6 text-[12px]'>
                    <Link href="/Live-scores" className='hover:text-gray-300'>
                        Live Scores
                    </Link>
                    <Link href="/series" className="hover:text-gray-300">
                        Series
                    </Link>
                    <Link href="/teams" className="hover:text-gray-300">
                        Teams
                    </Link>
                    <Link href="/news" className='hover:text-gray-300'>
                        News
                    </Link>
                    <Link href="/features" className='hover:text-gray-300'>
                        Features
                    </Link>
                    <Link href="/videos" className="hover:text-gray-300">
                        Videos
                    </Link>
                    <Link href="/Stats" className='hover:text-gray-300'>
                        Stats
                    </Link>
                    <Link href="/Women's-World-Cup" className='hover:text-gray-300'>
                        Women's World Cup
                    </Link>
                </div>

                <div className="relative group">
                    <span className="hover:text-gray-300 cursor-pointer text-[13px]">
                        Edition PK
                    </span>

                    <div className="absolute left-0 mt-2 w-48 bg-blue-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
                        <div className="grid grid-cols-2 gap-2 p-2 text-[10px]">

                            <ul>
                                <li>
                                    <Link href="/africa" className="block px-4 py-2 hover:bg-blue-600">
                                        Africa
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bangladesh" className="block px-4 py-2 hover:bg-blue-600">
                                        Bangladesh
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pakistan" className="block px-4 py-2 hover:bg-blue-600">
                                        Pakistan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/united-kingdom" className="block px-4 py-2 hover:bg-blue-600">
                                        United Kingdom
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        Global
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        India
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        New Zealand
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        Sri Lanka
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        Australia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/global" className="block px-4 py-2 hover:bg-blue-600">
                                        United States
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-2  '>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="text-white p-2 rounded-full   cursor-pointer"
                    >
                        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400 " /> : <Moon className="h-6 w-6 text-gray-200" />}
                    </button>
                    <div className="flex items-center space-x-4 cursor-pointer ">
                        <Bell className="h-6 w-6 text-white dark:text-white hover:text-gray-300 dark:hover:text-gray-400 pointer-cursor" />
                    </div>
                    <button
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className="text-white p-2  cursor-pointer "
                    >
                        <Search className="h-6 w-6 text-white hover:text-gray-300" />
                    </button>

                    {isSearchVisible && (
                        <div className=" absolute right-0  mb-4     w-80 h-8 rounded-md px-4 py-2">
                            <div className=''>
                            <input
                                type="text"
                                placeholder="Search Players, Teams or Series"
                                Search

                                className="w-full p-2 h-10 pl-10  rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute mt-4 top-1/3 h-7 w-8 transform -translate-y-1/2 text-gray-500" cursor={'pointer'} />
                                                                   



                        </div>
                                                       

                        </div>
                        

                    )}
                     <div className="relative ">
                        <MoreVertical className="absolute  top-1/2 transform -translate-y-1/2 text-white h-5 w-5 cursor-pointer  hover:text-gray-300" />
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

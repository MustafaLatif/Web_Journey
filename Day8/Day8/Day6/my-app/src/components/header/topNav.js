import React from 'react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <nav className="bg-[#0398dc] dark:bg-[#1e3a8a] flex justify-center items-center space-x-8 py-2 text-white text-[10px] transition-colors duration-300">
      <div className="flex space-x-6">
        <Link href="/matches" className="hover:text-gray-300  font-medium ">
         <strong>Matches(12)</strong>
        </Link>
        <Link href="/pak vs sa" className="hover:text-gray-300  font-medium">
          PAK vs SA
        </Link>
        <Link href="/women's world cup" className="hover:text-gray-300  font-medium">
          Women's World Cup(2)
        </Link>
        <Link href="/afg vs ban" className="hover:text-gray-300 tfont-medium">
          AFG vs BAN (1)
        </Link>
        <Link href="/ind vs wi" className="hover:text-gray-300  font-medium">
          IND v
        </Link>
        <Link href="/kabul pl" className="hover:text-gray-300  font-medium">
          Kabul PL (2)
        </Link>
        <Link href="/qea tropy" className="hover:text-gray-300  font-medium">
          QEA Trophy (5)
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;

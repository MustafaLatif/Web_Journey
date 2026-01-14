'use client'
import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';

const teamData = [
  { name: "Afghanistan", img: "https://flagpedia.net/data/flags/h80/af.png?v=un" },
  { name: "China", img: "https://flagpedia.net/data/flags/h80/cn.webp" },
  { name: "Pakistan", img: "https://flagpedia.net/data/flags/h80/pk.webp" },
  { name: "UAE", img: "https://flagpedia.net/data/flags/h80/ae.webp" },
  { name: "USA", img: "https://flagpedia.net/data/flags/h80/us.webp" },
  { name: "Turkey", img: "https://flagpedia.net/data/flags/h80/tr.webp" },
  { name: "Syria", img: "https://flagpedia.net/data/flags/h80/sy.webp" },
  { name: "Saudi Arabia", img: "https://flagpedia.net/data/flags/h80/sa.webp" },
   { name: "India", img: "https://flagpedia.net/data/flags/h80/in.webp" },
  { name: "Australia", img: "https://flagpedia.net/data/flags/h80/au.webp" },
  { name: "England", img: "https://flagpedia.net/data/flags/h80/gb-eng.webp" },
  { name: "South Africa", img: "https://flagpedia.net/data/flags/h80/za.webp" },
  { name: "New Zealand", img: "https://flagpedia.net/data/flags/h80/nz.webp" },
  { name: "Bangladesh", img: "https://flagpedia.net/data/flags/h80/bd.webp" },
  { name: "Sri Lanka", img: "https://flagpedia.net/data/flags/h80/lk.webp" },
  { name: "Zimbabwe", img: "https://flagpedia.net/data/flags/h80/zw.webp" },
];

const TeamFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;   

  const nextTeams = () => {
     if (currentIndex + itemsPerPage >= teamData.length) {
      setCurrentIndex(0);   
    } else {
      setCurrentIndex(currentIndex + itemsPerPage);   
    }
  };

  const currentTeams = teamData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md relative w-full max-w-4xl mx-auto transition-colors duration-300">
      <h2 className="text-black dark:text-white font-bold text-sm mb-2">Team Features</h2>
      <hr className="border border-gray-300 dark:border-gray-600 mb-4" />

      <div className="flex gap-6 justify-center items-center">
        {currentTeams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-2 rounded-lg shadow-lg transition-colors duration-300"
          >
            <img src={team.img} alt={`${team.name} Flag`} className="w-10 h-8 object-cover" />
            <h2 className="text-[12px] font-semibold mt-2 text-center text-black dark:text-white">{team.name}</h2>
          </div>
        ))}
      </div>

       <ChevronRight
        onClick={nextTeams}
        className="absolute right-4 top-2/3 -translate-y-1/2 w-10 h-8 text-blue-500 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
        disabled={teamData.length <= itemsPerPage}   
      />
    </div>
  );
}

export default TeamFeatures;

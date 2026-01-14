"use client"
import {CheckCircle, Wifi} from 'lucide-react'
export default function MiniHeader () {

    return(
        <header className="flex justify-between items-center px-8 py-4 border-b border-t border-gray-300 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#4f46e5]">

            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-gray-800">Mini Issue Tracker</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-green-400 text-green-600 rounded-full text-sm bg-green-50">
            <Wifi className="h-4 w-4" /> Live Updates
          </button>
          <div className="h-9 w-9 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-semibold">
            ML
          </div>
        </div>
      </header>
    )
}
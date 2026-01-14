"use client"


export default function MainHeader () {
  return(
    <div className="bg-white shadow-sm flex items-center justify-between px-5 py-3">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
          >
            <path d="M127.99463,24.00537a7.99967,7.99967,0,0,0-7.99414,8V128a7.99967,7.99967,0,0,0,7.99414,8,56.06342,56.06342,0,0,1,0,112,8,8,0,0,0,0,16,72.081,72.081,0,0,0,0-144,8,8,0,0,0,0-16,56.06342,56.06342,0,0,1,0-112Zm0,96a40,40,0,0,0,0-80Z" />
          </svg>
          <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md font-medium">
            AI
          </span>
        </div>

        {/* Center title */}
        <h1 className="text-sm font-medium text-gray-800">
          Mini Issue Tracker Dashboard <span className="text-black">▼</span>
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="bg-gray-100 w-5 h-5 flex items-center justify-center rounded-full text-gray-600 text-[12px] font-bold">
            ?
          </button>
          <button className="bg-[#5a4ff3] hover:bg-[#4338ca] text-white text-sm px-4 py-1.5 rounded-lg shadow-sm transition">
            Share
          </button>
        </div>
      </div>
  )
}
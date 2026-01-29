"use client";
import Link from "next/link";
import { FolderIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mini Issue Tracker Dashboard</h1>

      <div className="flex justify-end mb-6">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/dashboard/1" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl">
            <div className="flex items-center mb-4">
              <FolderIcon className="h-6 w-6 text-gray-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Website Redesign</h2>
            </div>
            <p className="text-gray-600 mt-2">12 issues</p>
          </div>
        </Link>

        <Link href="/dashboard/2" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl">
            <div className="flex items-center mb-4">
              <FolderIcon className="h-6 w-6 text-gray-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Mobile App</h2>
            </div>
            <p className="text-gray-600 mt-2">8 issues</p>
          </div>
        </Link>

        <Link href="/dashboard/3" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl">
            <div className="flex items-center mb-4">
              <FolderIcon className="h-6 w-6 text-gray-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">API Migration</h2>
            </div>
            <p className="text-gray-600 mt-2">15 issues</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
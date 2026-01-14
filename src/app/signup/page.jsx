"use client";

import Link from "next/link";
import { useState } from "react";
import { addUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

export default function LoginPage() {
  const [error, setError] = useState("")
  const [user, setUserData] = useState({
    email: '',
    password: '',
    c_password: '',
  })

  const router = useRouter()

    const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user.email || !user.password || !user.c_password){
       setError("Please fill all fields")
    }
    else if(user.password != user.c_password){
        setError("Password must be same")
    }
    else{
      setError("")
      router.push("/login")
        dispatch(addUser(user))
    }
  };

  

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({...user, [name]: value})
  }
  return (
    <div className="bg-[#f6f7ff] flex flex-col">

      <main className=" flex flex-col min-h-[653px] h-auto items-center justify-center px-4">

        <div className="flex flex-col  h-42 gap-3 p-1 justify-center items-center mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5a4ff3] shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-lg text-[15px] text-[#4f46e5] mt-3">
            Mini Issue Tracker
          </h1>
          <p className="text-gray-500 text-[15px]">
            Sign up to manage your projects
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white flex flex-col gap-5 shadow-xl rounded-2xl px-12 py-10 w-full sm:w-[500px]"
        >

          {
            error && (
                <h1 className="text-red-700">{error}</h1>
            )
          }
          <div className="mb-6">
            <label
              for="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={user.email}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
          </div>

          {/* Password */}
          <div className="mb-12 py-2">
            <label
              for="password"
              className="block text-gray-700 font-semibold mb-2"
            >Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={user.password}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

           <div className="mb-12 py-2">
            <label
              for="password"
              className="block text-gray-700 font-semibold mb-2"
            >Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="c_password"
              placeholder="••••••••"
              value={user.c_password}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <button
            className="w-full bg-[#5a4ff3] text-white py-3 rounded-lg font-semibold hover:bg-[#4338ca] transition duration-200"
          >
            Sign up
          </button>
          <div className="text-center">
          <span>Already have an account? <Link href="/login" className="text-sky-700">Sign in</Link></span>
          </div>
        </form>
      </main>
    </div>
  );
}

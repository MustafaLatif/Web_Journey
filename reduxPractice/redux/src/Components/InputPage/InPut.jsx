"use client"; // Mark this as a client-side component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct for App Router

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Redirect to the Dashboard page after form submission
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-700">Mini Issue Tracker</h2>
        <p className="text-gray-500">Sign in to manage your projects</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const loginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
//   const res = await fetch('/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password })
//   })
//   if (!res.ok) throw new Error('Login failed')
//   return await res.json()
// })

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null, role: null, loading: false, error: null },
//   reducers: {
//     logout: (state) => {
//       state.user = null
//       state.token = null
//       state.role = null
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => { state.loading = true })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false
//         state.token = action.payload.token
//         state.role = action.payload.role
//       })
//       .addCase(loginUser.rejected, (state) => {
//         state.loading = false
//         state.error = "Invalid email or password"
//       })
//   },
// })

// export const { logout } = authSlice.actions
// export default authSlice.reducer

import Image from 'next/image';
import backg from "../../images/background.avif"
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import signIn from "../../images/bag.webp"

export default function LogInBox() {
  return (
    <div className='bg-teal-950 h-screen flex items-center justify-center p-10'>
   
        <div className='bg-[#16202a] text-white flex items-center justify-center flex-col rounded-lg shadow-md'>
          <div className='my-4'>
            <h2 className='text-3xl font-semibold'>Login</h2>
            <p className='mt-2 text-sm text-slate-400'>Carefully Submit a Information </p>
          </div>
          <form className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor="email" className="self-start text-gray-700 mt-2 font-semibold">Email Address:</label>
      <input
        className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500  text-gray-700"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <label htmlFor="password" className="self-start text-gray-700 mt-2 font-semibold">Password :</label>
      <input
        className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500  text-gray-700"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
   
  <label htmlFor="remember" className="ml-20 text-blue-500">
    Forget Password?
  </label>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-full px-8 py-2 mt-2 hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>
      <h4 className='text-slate-600 text-sm mt-3'>Not a member?<span className='text-blue-700'> Signup Now</span></h4>
    </form>
        </div>
   
      </div> 
   
  );
}


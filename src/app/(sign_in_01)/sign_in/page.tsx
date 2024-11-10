import Image from 'next/image';
import backg from "../../images/background.avif"
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import signIn from "../../images/bag.webp"

export default function SignInBox() {
  return (
    <div className='bg-teal-950 h-screen flex items-center justify-center p-10'>
   
        <div className='bg-[#16202a] text-white flex items-center justify-center flex-col rounded-lg shadow-md'>
          <div className='my-4'>
            <h2 className='text-3xl font-semibold'>Sign up</h2>
            <p className='mt-2 text-sm text-slate-400'>Carefully Submit a Information </p>
          </div>
          <form className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <button className="flex justify-center items-center rounded-full px-12 w-full bg-blue-500 h-10 gap-4 border-2 text-white border-gray-600mb-4 hover:  transition duration-300">
        <FaGoogle style={{ color: "red", fontSize: '20px' }} />
        Sign In with Google
      </button>
      <label htmlFor="email" className="self-start text-gray-700 mt-2 font-semibold "> Enter Your Name  :</label>
      <input
        className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500 text-gray-700 "
        type="text"
        name="Enter Your Name"
        id="Enter Your Name"
        placeholder="Enter Your Name"
        required
      />
      <label htmlFor="email" className="self-start text-gray-700 mt-2 font-semibold">Email :</label>
      <input
        className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500  text-gray-700"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <label htmlFor="password" className="self-start text-gray-700 mt-2 font-semibold">Password:</label>
<input
  className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500  text-gray-700"
  type="password"
  name="password"
  id="password"
  placeholder="Enter your password"
  required
/>

<label htmlFor="confirmPassword" className="self-start text-gray-700 mt-2 font-semibold">Confirm Password:</label>
<input
  className="mt-2 mb-4 bg-transparent border border-gray-300 rounded-full p-2 w-full placeholder-gray-500  text-gray-700"
  type="password"  
  name="confirmPassword"  
  id="confirmPassword"  
  placeholder="Confirm Password"
  required
/>


      <button
        type="submit"
        className="bg-blue-600 text-white rounded-full px-8 py-2 hover:bg-blue-700 transition duration-300"
      >
        Register Now
      </button>
    </form>
        </div>
   
      </div> 
   
  );
}


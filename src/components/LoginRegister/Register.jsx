"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai'; // Correct import for icons
import { FaRegEyeSlash } from 'react-icons/fa'; // Correct import for icons


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#c2d0d9] w-full px-4 lg:px-0 py-10">
      <div className="mx-auto lg:w-[400px] bg-white rounded-3xl px-12 pb-6">
        <h1 className="text-center text-2xl font-bold py-7">Register Now!</h1>

        <form>
          <p className="pb-1">Your Name</p>
          <input
            className="p-2 mb-2 border rounded-md w-full border-red-600"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <p className="pb-1">Photo URL</p>
          <input
            className="p-2 mb-2 border rounded-md w-full border-red-600"
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            required
          />

          <p className="pb-1">Email Address</p>
          <input
            className="p-2 mb-2 border rounded-md w-full border-red-600"
            type="email"
            name="email"
            placeholder="Enter Your email"
            required
          />

          <p className="pb-1">Password</p>
          <div className="flex flex-col relative">
            <input
              className="p-2 border rounded-md w-full border-red-600"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Enter your Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-[230px] lg:left-[270px] top-2 text-xl"
            >
              {showPassword ? <FaRegEyeSlash /> : <AiOutlineEye />}
            </span>
          </div>

          <button className="font-bold text-white w-full mt-5 p-2 rounded-md border bg-[#1c67bc]">
            Register
          </button>
        </form>

        <h1 className="text-center py-5">
          Do not have an account?{' '}
          <Link href="/login" className="text-[16px] font-bold">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;

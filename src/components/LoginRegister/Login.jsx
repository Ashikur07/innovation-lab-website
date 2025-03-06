'use client'; // This marks the component as a Client Component

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from 'next/link'; // Use next/link for navigation
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Use next/navigation for client-side routing
import { signIn } from "next-auth/react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter(); // Now using next/navigation

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: '/' }); // Redirect to home page after Google login
    };


    return (
        <div className='bg-[#c2d0d9] px-5 lg:px-0 w-full py-10'>

            <div className="animate__animated animate__zoomIn mx-auto lg:w-[390px] bg-white rounded-3xl px-8 pb-10">

                <h1 className='text-center text-2xl font-bold py-7'>Please login</h1>

                <button
                    onClick={handleGoogleSignIn}
                    className='border border-[#a39898] w-full p-2 gap-16 flex rounded-md cursor-pointer'>
                    <FcGoogle className='text-xl' />
                    <p className='font-semibold'>
                        Sign in with Google
                    </p>
                </button>

                <button className='w-full mt-2 rounded-md border p-2 gap-16 flex bg-[#2EA043] text-white'>
                    <FaGithub className='text-xl text-black' />
                    <p className='font-semibold'>
                        Sign in with GitHub
                    </p>
                </button>

                <div className='flex my-6 justify-between items-center'>
                    <p className='flex-grow border-b border-[#a39898]'></p>
                    <p className='px-4'>or</p>
                    <p className='flex-grow border-b border-[#a39898]'></p>
                </div>

                <form>
                    <p className='pb-1'>Email Address</p>
                    <input className='p-2 mb-2 border rounded-md w-full border-red-600' type="email" placeholder='Enter Your email' required />

                    <p className='pb-1'>Password</p>
                    <div className="flex flex-col relative">
                        <input
                            className='p-2 border rounded-md w-full border-red-600'
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your Password' required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute left-[250px] lg:left-[290px] top-2 text-xl">
                            {
                                showPassword ? <FaRegEyeSlash /> : <AiOutlineEye />
                            }
                        </span>
                    </div>

                    <button className='font-bold text-white w-full mt-5 p-2 rounded-md border bg-[#1c67bc]'>
                        Login
                    </button>
                </form>

                <h1 className='text-center mt-4'>Do not have an account? <Link href="/register" className='text-[16px] font-bold'>Register</Link></h1>

            </div>

        </div>
    );
};

export default Login;

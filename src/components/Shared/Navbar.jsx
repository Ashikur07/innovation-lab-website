"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-20 z-10 fixed top-0 left-0 w-full flex justify-between items-center py-4 transition-all duration-300 ${
        isScrolled
          ? "shadow-xl backdrop-blur-md text-black"
          : "bg-transparent text-white font-bold"
      }`}
    >
      {/* Left Side - Website Name */}
      <div className="text-2xl font-bold">Innovation Lab</div>

      {/* Middle - Navigation Links */}
      <div className="flex space-x-6">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="/people" className="hover:underline">
          People
        </a>
      </div>

      {/* Right Side - Extra Links */}
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">
          Login
        </a>
        <a href="#" className="hover:underline">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

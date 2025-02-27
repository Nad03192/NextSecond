"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full mt-9 mb-52 z-50">
      <div className="container mx-auto flex p-4">
        <Link href="/" className="hidden md:flex items-center">
          <Image src="/images/logo.svg" alt="Logo" width={120} height={20} />
        </Link>

        <nav className="hidden items-center md:flex gap-16  ml-24 justify-start">
          <Link 
            href="/home" 
            className={`text-black hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400 font-bold ${activeSection === 'home' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/aboutUs" 
            className={`text-black hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400 font-bold ${activeSection === 'about' ? 'font-bold' : ''}`}
          >
            Job
          </Link>
          <Link 
            href="/services" 
            className={`text-black hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400 font-bold ${activeSection === 'services' ? 'font-bold' : ''}`}
          >
            About Us
          </Link>
          <Link 
            href="/contactus" 
            className={`text-black hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400 font-bold ${activeSection === 'contact' ? 'font-bold' : ''}`}
          >
            Contact
          </Link>
          <div className="absolute top-4  right-20 flex items-center gap-x-6 md:gap-x-10">
          <Link 
              href="" 
              className={`text-white font-bold hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400`}
            >
              Sign In
            </Link>
            <Link href="">
              <div className="bg-white flex items-center h-[40px] px-1 w-[190px] text-black font-bold hover:text-[#00cc99] dark:text-white dark:hover:text-blue-400 py-3 rounded-md transition">
                <Image
                  src="/images/dr.svg" 
                  alt="Create Account Icon"
                  width={16} 
                  height={16} 
                  className="ml-3 mr-3 w-4 h-4 md:w-5 md:h-5" 
                />
                Create Account
              </div>
            </Link>
          </div>
        </nav>

        <div className="md:hidden ml-auto container mx-auto flex items-center justify-between p-4 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" width={120} height={20} />
            </Link>
          </div>

          <button
            className="md:hidden ml-auto focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-3xl w-full text-gray-800 dark:text-white">&times;</span> 
            ) : (
              <Image src="/images/hbr.svg" alt="Open Menu" width={30} height={30} />
            )}
          </button>
        </div>
      </div>






      <nav className={`md:hidden bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-start space-y-4 py-4 px-4">
          <Link 
            href="/" 
            className={`text-black dark:text-white hover:text-[#00cc99] dark:hover:text-blue-400 font-bold ${activeSection === 'home' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/" 
            className={`text-black dark:text-white hover:text-[#00cc99] dark:hover:text-blue-400 font-bold ${activeSection === 'about' ? 'font-bold' : ''}`}
          >
            Job
          </Link>
          <Link 
            href="/" 
            className={`text-black dark:text-white hover:text-[#00cc99] dark:hover:text-blue-400 font-bold ${activeSection === 'services' ? 'font-bold' : ''}`}
          >
            About Us
          </Link>
          <Link 
            href="/" 
            className={`text-black dark:text-white hover:text-[#00cc99] dark:hover:text-blue-400 font-bold ${activeSection === 'contact' ? 'font-bold' : ''}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

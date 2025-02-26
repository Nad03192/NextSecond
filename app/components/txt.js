"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import Side from "./side";

export default function ButText({ title, description }) {
  return (
   <div className="absolute inset-0 bg-[#f2f2f2]">
        
    <section className="flex flex-col md:flex-row items-center justify-center   px-4 pt-20 pb-20">
       
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      <div className="text-center md:w-1/2 md:text-left p-4">
        <h1 className="text-5xl font-bold text-black mb-4">{title}</h1>
        <p className="text-lg text-black mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4">
  
  <div className="flex bg-[#f9f9f9] w-48 items-center rounded-lg px-3 py-2 shadow-sm border border-gray-300">
    <Image src="/images/search.svg" alt="Search" width={20} height={20} className="mr-2" />
    <input
      type="text"
      placeholder="job title or keyword"
      className="w-full bg-transparent focus:outline-none text-gray-700"
    />
  </div>

  <div className="flex bg-[#f9f9f9] w-48 items-center rounded-lg px-3 py-2 shadow-sm border border-gray-300">
    <Image src="/images/location.svg" alt="Location" width={20} height={20} className="mr-2" />
    <select className="w-full bg-transparent focus:outline-none text-gray-700 cursor-pointer">
      <option value="">Location</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  </div>
              <button className="bg-[#00cc99]  text-white px-4 py-2 rounded-md">
                Search
              </button>
            </div>



      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
      <Side/>
      
      </div>
    </div>
  </section>
  </div>
  );
}

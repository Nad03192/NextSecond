"use client";

import Image from "next/image";

import Side from "./side";

export default function ButText({ title, description }) {
  return (
   <div className="absolute inset-0 bg-[#f2f2f2] ">
        
    <section className="flex flex-col md:flex-row items-center justify-center  mt-36 px-4 pt-20 pb-20">
       
    <div className="container mx-auto flex flex-col md:flex-row justify-between z-10">
      <div className="text-center  md:w-1/2 md:text-left sd:p-4 md:p-4">
        <h1 className="text-5xl font-bold text-black mb-11">{title}</h1>
        <p className="text-lg text-black mb-8">{description}</p>

        <div className="flex flex-row w-full max-w-[600px] items-center   mb-10 bg-white p-4 gap-2 md:gap-3 border rounded-xl">
  
  <div className="flex w-auto bg-[#f9f9f9] flex-grow items-center    py-2 shadow-sm rounded-md  ">
    <Image src="/images/search.svg" alt="Search" width={15} height={20} className="mr-2 ml-2" />
    <input type="text" placeholder="Job title or keyword" className="placeholder:text-black text-sm bg-transparent w-40 focus:outline-none text-gray-700" />
  </div>

  <div className="flex w-auto bg-[#f9f9f9] flex-grow items-center   py-2 shadow-sm   rounded-md ">
    <Image src="/images/location.svg" alt="Location" width={15} height={20} className="mr-2 ml-2" />
    <select className=" bg-transparent focus:outline-none text-gray-black cursor-pointer mr-5 text-sm">
      <option value="">Location</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  </div> 

  <button className="bg-[#00cc99] text-white px-3  text-xs md:px-6 py-3 rounded-md">
  Search
</button>

</div>




      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end ">
      <Side/>
      
      </div>
    </div>
  </section>
  </div>
  );
}
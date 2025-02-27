"use client";

import Image from "next/image";

export default function Side() {
  return (
    <div className="fixed md:top-0 right-0 z-40 w-full h-[40vh] md:h-[96vh] bg-[#00cc99] md:w-[40vw] md:rounded-bl-[50px] shadow-lg p-4 flex flex-col items-center justify-center">
      
      <div className="w-full h-full relative ">
       
        <div className="absolute ml-14 mt-2 md:mt-28 md:ml-10 md:left-10 w-16 h-8 md:w-14 md:h-10">
          <Image 
            src="/images/t.svg" 
            alt="Top Left Icon" 
            width={40} 
            height={20} 
            className="w-full h-auto"
          />
        </div>

        <div className="absolute mt-10 ml-32 sd:mt-28 md:mt-64 right-4 md:right-10  w-16 h-8 md:w-14 md:h-10">
          <Image 
            src="/images/i1.svg" 
            alt="Center Right Icon" 
            width={40} 
            height={20} 
            className="w-full h-auto"
          />
        </div>

        <div className="absolute ml-10 mb-28 mt-36 md:mb-52  md:bottom-10 md:left-10 w-16 h-8 md:w-14 md:h-10">
          <Image 
            src="/images/i3.svg" 
            alt="Bottom Left Icon" 
            width={40} 
            height={20} 
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
}
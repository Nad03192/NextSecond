"use client";
import Link from "next/link";
import Image from "next/image";
export default function Side() {
  return (
    <div className="fixed top-0 right-0  z-40 w-[40vw] h-[100vh] m bg-[#00cc99] rounded-bl-[50px] shadow-lg hidden md:block p-4">
      
      <div className="flex items-center justify-center space-x-28 ">
        <Link href="" className="text-white font-semibold text-mg">
          Sign In
        </Link>
        <Link href ="">
          <div className="bg-white flex items-center h-[40px] px-1 w-[170px]  text-black py-3 rounded-md bg-[ffffff] transition ">
          
            <Image
              src="/images/dr.svg" 
              alt="Create Account Icon"
              width={14} 
              height={14} 
              className="ml-3 mr-3" 
            />
            Create Account
          </div>
        </Link>

        
      </div>
      <div className="flex flex-col items-start mt-10">
  <div className="flex justify-start">
    <div className="mr-20 ml-[100px]"> 
      <Image src="/images/t.svg" alt="Icon 1" width={90} height={40} />
    </div>
    <div className="mr-6 mt-40 fixed right-0">
      <Image src="/images/i1.svg" alt="Icon 2" width={90} height={40} />
    </div>
  </div>
  <div className="mt-10 ml-10 fixed bottom-28 mb-10"> 
    <Image src="/images/i3.svg" alt="Icon 3" width={90} height={40} />
  </div>
</div>

</div>


  );
}

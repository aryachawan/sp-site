"use client";
import Link from "next/link";
export default function TopNavbar(){
    
  return(
    <div className="w-full p-4 flex items-center justify-center gap-4">
      <Link
        href="/"
        className="px-5 py-3 border border-white rounded-3xl text-lg
                   transition-all duration-500 ease-in-out
                   hover:bg-white hover:text-black"
      >
        Overview
      </Link>

      <Link
        href="/contact-me"
        className="px-5 py-3 border border-white rounded-3xl text-lg
                   transition-all duration-500 ease-in-out
                   hover:bg-white hover:text-black"
      >
        Contact me
      </Link>
    </div>
  );
}

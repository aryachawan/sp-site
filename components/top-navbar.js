"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TopNavbar(){
    const pathname = usePathname();

    const basedesign = "px-5 py-3 border border-white rounded-3xl text-lg transition-all duration-300 ease-in-out"
    const activelink = "bg-white text-black"
    const inactivelink = "hover:bg-white hover:text-black"
    return(
    <div className="w-full p-4 flex items-center justify-center gap-4">
      <Link href="/" className={`${basedesign} ${pathname === "/" ? activelink : inactivelink}`}>
        Overview
      </Link>
      <Link href="/contact-me" className={`${basedesign} ${pathname === "/contact-me" ? activelink : inactivelink}`}>
        Contact me
      </Link>
    </div>
  );
}

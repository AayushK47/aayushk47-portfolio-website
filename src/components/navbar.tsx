"use client"
import { usePathname } from "next/navigation";
import Link from 'next/link'
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-dark px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg"><span className="text-info">Aayush</span> <span className="text-highlight">Kurup</span></div>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className={`${pathname == '/' ? 'text-highlight' : 'text-info'} font-bold`}>Home</Link>
          <Link href="/about" className={`${pathname == '/about' ? 'text-highlight' : 'text-info'} font-bold`}>About</Link>
          <a href="#" className={`${pathname == '' ? 'text-highlight' : 'text-info'} font-bold`}>Projects</a>
          <a href="#" className={`${pathname == '' ? 'text-highlight' : 'text-info'} font-bold`}>Blogs</a>
          <a href="#" className={`${pathname == '' ? 'text-highlight' : 'text-info'} font-bold`}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

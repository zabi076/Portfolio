
"use client";
import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div className="fixed top-0 w-full flex flex-row justify-end p-8 bg-slate-600 z-10 ">
     
     
      <div id="header" className="flex space-x-6 font-mono items-center relative">
        
        <Link to="about" smooth={true} duration={500} className="group cursor-pointer">
          <span className="text-fixed text-cyan-300">01.</span>
          <span className="group-hover:text-zinc-400"> About</span>
        </Link>
        <Link to="experience" smooth={true} duration={500} className="group cursor-pointer">
          <span className="text-fixed text-cyan-300">02.</span>
          <span className="group-hover:text-zinc-400 "> Experience</span>
        </Link>
        <Link to="technologies" smooth={true} duration={500} className="group cursor-pointer">
          <span className="text-fixed text-cyan-300">03.</span>
          <span className="group-hover:text-zinc-400"> Technologies</span>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="group cursor-pointer">
          <span className="text-fixed text-cyan-300">04.</span>
          <span className="group-hover:text-zinc-400"> Contact</span>
        </Link>

        <div className=" relative inline-block mr-20 px-10 right-0 top-[-34px]">
          <div className="bg-slate-600 border-2 border-cyan-400 rounded-lg py-8 px-2 transition-transform duration-300 custom-hover">
            <a href="/zabiResume.pdf" target="_blank" className="text-slate-400 font-bold hover:text-cyan-400">
              Resume
            </a>
          </div>
          <div className="bg-cyan-400 rounded-lg py-8 px-1 absolute top-0 left-0 transition-all duration-300 opacity-0 custom-bg"></div>
        </div>
        
      </div>
    </div>
  );
}

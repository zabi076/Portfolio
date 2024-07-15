// components/About.tsx
"use client";
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-800 p-8 hover-bg-effect"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
        
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg">
            Hi, I am Zohaib Ismail, a front-end developer with a passion for
            creating beautiful and functional web applications. I specialize in
            using modern technologies like React and Next.js to build responsive
            and user-friendly interfaces. I am constantly learning and evolving
            my skills to stay updated with the latest trends in web development.
          </p>
        </div>

        <div className="relative inline-block">
          <div className="bg-cyan-400 rounded-lg py-8 px-1 absolute top-0 left-0 transition-all duration-300 opacity-0 custom-bg z-0 hover:opacity-100"></div>
          <div className="relative z-10 bg-slate-800 border-2 border-cyan-400 rounded-lg py-10 px-20 transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2">
            <div className="flex items-center">
              <img
                src="/adobewalipic.png" // Replace with your icon image path
                alt="icon"
                className="mr-2 w-6 h-6"
              />
              <img
                src="/adobewalipic.png" // Replace with your "Say hello" image path
                alt="Say hello"
                className="h-20" // Adjust the height as needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

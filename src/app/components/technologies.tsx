// components/Technologies.tsx
import React from "react";
import Image from "next/image";

export default function Technologies() {
  const techs = [
    { name: "Figma", src: "/figma.png", link: "https://www.figma.com/" },
    { name: "Adobe", src: "/adobe.png", link: "https://www.adobe.com/" },
    { name: "React", src: "/cpp.png", link: "https://isocpp.org/" },
    { name: "GitHub", src: "/github.png", link: "https://github.com/" },
    // Add more technologies here
  ];

  return (
    <div
      id="technologies"
      className="bg-slate-800 min-h-screen flex flex-col items-center py-20 hover-bg-effect"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-2">Tech Toolkit</h2>
        <p className="text-2xl text-slate-300 italic">My Go-To Arsenal for Creating Digital Magic</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {techs.map((tech) => (
          <div key={tech.name} className="relative inline-block">
            <div className="bg-cyan-400 rounded-lg py-8 px-1 absolute top-0 left-0 transition-all duration-300 opacity-0 custom-bg z-0 hover:opacity-100"></div>
            <div className="relative z-10 bg-slate-800 border-2 border-cyan-400 rounded-lg py-10 px-20 transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2">
              <a href={tech.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <Image src={tech.src} alt={tech.name} width={96} height={96} className="w-24 h-24"/>
                </div>
                <p className="text-cyan-300 mt-2">{tech.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
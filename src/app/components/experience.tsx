import React from "react";

export default function Experience() {
  return (
    <div
      id="experience"
      className="bg-slate-800 min-h-screen flex flex-col items-center justify-center py-20 hover-bg-effect"
    >
      <div className="max-w-4xl px-4 w-full">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          {"WHERE I'VE WORKED"}
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0 relative">
            <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-cyan-400"></div>
            <a
              href="https://www.hexlertech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-1xl font-sans text-gray-400 hover:text-cyan-300 
                         bg-transparent hover:bg-slate-700 
                         transition-all duration-300 cursor-pointer 
                         py-2 pl-6 pr-4 rounded-r-lg inline-block
                         relative"
            >
              HEXLER TECH
            </a>
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-400 text-lg leading-relaxed">
              I am currently thriving as an Intern and Front-End Developer at
              Hexler Tech, a dynamic and innovative tech company. In this
              vibrant startup environment, I am gaining invaluable hands-on
              experience in modern web development. My role involves crafting
              responsive and intuitive user interfaces using cutting-edge
              technologies like React and Next.js, while also honing my skills
              in TypeScript for robust code development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

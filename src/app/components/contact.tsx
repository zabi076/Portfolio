import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-slate-800 min-h-screen flex flex-col items-center py-20 hover-bg-effect"
    >
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold text-slate-300">Contact</h2>
      </div>
      <p className="text-cyan-300 mb-4">Feel free to reach out to me!</p>

      <div className="relative inline-block">
  <div className="bg-cyan-400 rounded-lg py-8 px-1 absolute top-0 left-0 transition-all duration-300 opacity-0 custom-bg z-0 hover:opacity-100"></div>
  <div className="relative z-10 bg-slate-800 border-2 border-cyan-400 rounded-lg py-10 px-20 transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2">
    <a
      href="mailto:zohaibisamil.412@gmail.com"
      className="text-slate-400 font-bold hover:text-cyan-300 transition-colors duration-300 custom-hover"
    >
      Say hello
    </a>
  </div>
</div>

    
  </div>  

  );
}

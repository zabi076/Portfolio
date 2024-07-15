import React from "react";



export default function HerosectionPage() {
  return (
    <div className="bg-slate-800 min-h-screen  flex items-center justify-center hover-bg-effect">
      <div className="text-center">
        <h6 className="text-cyan-400 text-lg">Hi, my name is</h6>
        <div className=" text-center">
        <h1 className="text-5xl font-bold text-slate-300 hover: translate-y-4 transition-transform duration-300 relative ">
          Zohaib Ismail
        
        
          <img
            src="/zohaib-pic.jpeg" // Replace with the path to your image
            alt="zohaib Image"
            width={500}
            height={300}
            className="w-24 h-24 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </h1>
        </div>
      </div>
    </div>
  );
}

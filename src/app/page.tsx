"use client"
import React from "react";

import Header from "./components/header";
import HerosectionPage from "./components/herosection";
import about from "./components/about";
import { SocialLink, Email }  from "./components/socialLink";
import Technologies from "./components/technologies";
import Contact from "./components/contact";



const About = () => (
  <div id="about" className="min-h-screen flex items-center justify-center bg-slate-700">
    <h2 className="text-4xl text-white">About</h2>
  </div>
);

const Experience = () => (
  <div id="experience" className="min-h-screen flex items-center justify-center bg-slate-600">
    <h2 className="text-4xl text-white">Experience</h2>
  </div>
);

const Project = () => (
  <div id="project" className="min-h-screen flex items-center justify-center bg-slate-500">
    <h2 className="text-4xl text-white">Project</h2>
  </div>
);


export default function Home() {
  return function Page() {
    return (
      <div>
        <Header />
        <HerosectionPage/>
        <About/>
        <Experience/>
        <Technologies/>
        <SocialLink/>
        <Email/>
        <Contact/>
      
        
      </div>
    );
  };
}


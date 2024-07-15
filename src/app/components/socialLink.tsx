import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

 export function SocialLink() {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 ml-9">
      <a href="https://github.com/zabi076" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors" />
      </a>
      <a href="https://linkedin.com/in/zohaib ismail" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors" />
      </a>
      <a href="https://instagram.com/the_name_is_zohaib" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors" />
      </a> 
      
    </div>
  );
};

export function Email() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2">
    <a 
      href="mailto:zohaibisami.412@gmail.com" 
      className="text-gray-300 hover:text-cyan-400 transition-colors writing-mode-vertical"
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        transform: 'revert',
        padding: '20px'
      }}
    >
      zohaibisami.412@gmail.com
    </a>
  </div>
  );
};


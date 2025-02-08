import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdCalendarToday } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="abtbtn flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
       
      </div>
      <div className="relative group transform hover:scale-105 transition-all mt-4 sm:mt-0">
        <div className="absolute -inset-0.5 bg-blue-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
        <button className="relative px-4 py-2 bg-black hover:bg-black/90 rounded-lg transition-all text-white font-bold text-base sm:text-lg whitespace-nowrap">
        <a href="https://calendly.com/zain55/30min?preview_source=et_card&month=2025-02">
        
          Book a Call
        </a>
        </button>
      </div>
    </div>
  )
}

export default Buttons
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBullhorn, FaChartLine, FaUserTie, FaSearchDollar, FaMegaport } from "react-icons/fa";
import Buttons from "./Buttons";

const About = () => {
  return (
    <div className="px-2 bg-zinc-900 w-full h-[50%] flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-1000">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full p-2 sm:p-4 gap-4 sm:gap-2">
        <div className="abt1 w-full lg:w-2/3 flex gap-4 sm:gap-8 lg:gap-16 flex-col">
          <div className="abttext text-sm sm:text-lg lg:text-xs">
            
            <h1 className="text-white/60 flex items-center gap-2 flex-wrap">
              <span className="animate-wave">👋</span> 
              <span className="hover:text-blue-400 transition-all duration-300">STOP STRUGGLING. START GROWING.</span>
              <FaBullhorn className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-2 sm:my-4 flex items-center gap-2 flex-wrap">
              <FaUserTie className="text-green-400" />
              I Turn Words into Growth Machines. Most businesses and entrepreneurs waste time guessing, hoping, and praying their content will work. They struggle with bland messaging, weak positioning, and zero engagement—and wonder why they're not getting results.
              <FaChartLine className="text-yellow-400 animate-bounce" />
            </p>
            <div className="flex items-center gap-2 mb-2 sm:mb-4 flex-wrap">
              <FaSearchDollar className="text-blue-400 animate-spin" />
              <FaMegaport className="text-yellow-400" />
              <span className="text-gray-300">That's where I come in.</span>
            </div>
            <p className="mb-4 sm:mb-6 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 flex-wrap">
              <FaEnvelope className="text-red-400" />
              I craft powerful, conversion-driven content that grabs attention, builds trust, and turns casual visitors into loyal customers. Whether it's a killer website copy, persuasive sales pages, or SEO-driven blog posts—I don't just write words. I create impact.
            </p>
           
          </div>
          <Buttons />
        </div>
        <div className="abt2 w-2/3 sm:w-1/2 lg:w-1/3 transform hover:scale-105 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-center rounded-full border-4 border-transparent hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-400/20"
            src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
            alt="Zain ul Abbidin profile"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
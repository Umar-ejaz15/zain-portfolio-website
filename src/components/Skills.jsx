import React from 'react'
import { FaChartLine, FaSearchDollar, FaBullhorn, FaLaptop, FaBook, FaCode, FaHashtag, FaYoutube, FaReddit } from 'react-icons/fa'
import { SiGoogleanalytics, SiPinterest, SiLinkedin, SiSemrush } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="h-full px-4 py-6 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <FaCode className="text-blue-500 animate-pulse" />
        About Me
      </h2>
      <div className="space-y-2 flex-1">
        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <p className="text-sm md:text-xs text-gray-300 hover:text-white transition-colors leading-relaxed">
            <FaLaptop className="inline-block mr-2 text-blue-400" />
            Hi, I'm Zain, a Product Marketing Specialist from Lahore, specializing in SaaS product marketing and digital strategies.
          </p>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-white flex items-center gap-3">
            <FaChartLine className="text-green-500 animate-bounce" />
            Marketing Skills
          </h3>
          <ul className="grid grid-rows-2 md:rows-rows-3 lg:grid-rows-4 gap-2">
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaSearchDollar className="text-green-500 text-xl" />SEO
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiGoogleanalytics className="text-white text-xl" />Google Analytics 4
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaBullhorn className="text-blue-400 text-xl" />Content Marketing
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiSemrush className="text-green-500 text-xl" />SEMrush & Ahrefs
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaHashtag className="text-yellow-400 text-xl" />Social Media Marketing
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiLinkedin className="text-blue-500 text-xl" />LinkedIn Marketing
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaReddit className="text-orange-500 text-xl" />Reddit Marketing
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiPinterest className="text-red-500 text-xl" />Pinterest Marketing
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaYoutube className="text-red-600 text-xl" />Video Marketing
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg mt-auto">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white flex items-center gap-3">
            <FaBook className="text-purple-400 animate-bounce" />
            Interests & Hobbies
          </h3>
          <div className="flex items-start gap-4 flex-wrap">
            <FaBook className="text-green-400 text-2xl mt-1" />
            <p className="text-sm md:text-sm text-gray-300 leading-relaxed hover:text-white transition-colors flex-1">
              Beyond marketing, I'm an avid enthusiast of anime, manga, manhua, and manhwa, finding inspiration in their compelling narratives. As a passionate foodie and Google Guide, I explore diverse culinary experiences and share authentic reviews. These interests fuel my creativity and contribute to my innovative marketing approaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
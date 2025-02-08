import React from 'react'
import { FaChartLine, FaSearchDollar, FaBullhorn, FaLaptop, FaBook, FaCode, FaHashtag, FaYoutube, FaReddit } from 'react-icons/fa'
import { SiGoogleanalytics, SiPinterest, SiLinkedin, SiSemrush } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="h-full px-4 py-6 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
      <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-3">
        <FaCode className="text-blue-500 animate-pulse" />
        About Me
      </h2>
      <div className="space-y-2 flex-1">
        <div className="bg-zinc-800/50 p-4  text-xs rounded-lg">
          <p className="text-xs text-gray-300 hover:text-white transition-colors leading-relaxed">
            <FaLaptop className="inline-block mr-2 text-blue-400" />
            Hey, I'm Zain Ul Abdin. I don't do fluff. I don't do generic. And I definitely don't do "just another marketing guy." I'm a Product Marketing Specialist who knows how to turn traffic into conversions, words into sales, and dead content into a lead-generating machine. With 2+ years of experience scaling SaaS brands, I've helped businesses grow from crickets to thousands of organic users—all with the power of strategic marketing, SEO, and data-driven content.
          </p>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold mb-6 text-white flex items-center gap-3">
            <FaChartLine className="text-green-500 animate-bounce" />
            Marketing Skills
          </h3>
          <ul className="grid grid-rows-2 md:rows-rows-3 lg:grid-rows-4 gap-2">
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaSearchDollar className="text-green-500 text-xl" />SEO
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiGoogleanalytics className="text-white text-xl" />Google Analytics 4
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaBullhorn className="text-blue-400 text-xl" />Content Marketing
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiSemrush className="text-green-500 text-xl" />SEMrush & Ahrefs
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaHashtag className="text-yellow-400 text-xl" />Social Media Marketing
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiLinkedin className="text-blue-500 text-xl" />LinkedIn Marketing
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaReddit className="text-orange-500 text-xl" />Reddit Marketing
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiPinterest className="text-red-500 text-xl" />Pinterest Marketing
            </li>
            <li className="text-xs text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaYoutube className="text-red-600 text-xl" />Video Marketing
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg mt-auto">
          <h3 className="text-sm font-semibold mb-4 text-white flex items-center gap-3">
            <FaBook className="text-purple-400 animate-bounce" />
            Achievements & Approach
          </h3>
          <div className="flex items-start gap-4 flex-wrap">
            <FaBook className="text-green-400 text-2xl mt-1" />
            <p className="text-xs text-gray-300 leading-relaxed hover:text-white transition-colors flex-1">
              At Amoxt Solutions Inc., I played a key role in growing Blainy to 46,000+ organic users, 200+ paying customers, and 6M+ impressions on Google and Bing. I take a data-driven, no-BS approach to growth—crafting marketing strategies that don't just look good but actually drive real results. When I'm not breaking marketing algorithms, I'm deep into anime, manga, and storytelling, or hunting down the best food spots as a Google Guide. If you want no-nonsense, high-impact marketing strategies that actually work—let's talk. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
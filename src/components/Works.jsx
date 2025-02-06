import React from "react";
import { FaSearchDollar, FaChartLine, FaBullhorn, FaHashtag } from "react-icons/fa";

const Works = () => {
  const services = [
    { icon: <FaSearchDollar />, title: "SEO & Analytics" },
    { icon: <FaChartLine />, title: "Digital Strategy" },
    { icon: <FaBullhorn />, title: "Social Media Marketing" },
    { icon: <FaHashtag />, title: "Content Marketing" },
  ];

  return (
    <div className="flex flex-col gap-2 h-full ">
      <div className="p-2 bg-zinc-900 w-full text-center text-xl md:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white">
        {new Date().toLocaleTimeString()}
      </div>
      <div className="p-4 md:p-2 bg-zinc-900 w-full h-full border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white">
        <h1 className="text-2xl md:text-xl font-bold mb-2">What I Do</h1>
        <div className="grid grid-row-1 sm:grid-rows-2 lg:grid-rows-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all duration-300"
            >
              <div className="text-4xl md:text-xl text-white">
                {service.icon}
              </div>
              <h2 className="text-lg md:text-sm font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import MouseFollow from "./components/MouseFollow";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Side from "./components/Side";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Helmet>
        <title>Zain Ul Abdin - Product Marketing Specialist | Digital Marketing Portfolio</title>
        <meta name="description" content="I'm Zain Ul Abdin, a Product Marketing Specialist with expertise in SEO, Social Media Marketing, and Digital Marketing. Experienced in SaaS product marketing and data-driven strategies." />
        <meta name="keywords" content="Product Marketing Specialist, Digital Marketing, SEO, Social Media Marketing, SaaS Marketing, Content Strategy, Google Analytics, SEMrush, Ahrefs, Campaign Management" />
        <meta name="author" content="Zain Ul Abdin" />
        <meta property="og:title" content="Zain Ul Abdin - Product Marketing Specialist" />
        <meta property="og:description" content="Results-driven Product Marketing Specialist with 2+ years of experience in SaaS products, SEO, and digital marketing strategies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zain Ul Abdin - Product Marketing Specialist" />
        <meta name="twitter:description" content="Product Marketing Specialist specializing in SEO, social media optimization, and data-driven marketing strategies." />
        <link rel="canonical" href="https://your-website-url.com" />
        <meta name="location" content="Lahore, Pakistan" />
        <meta name="contact" content="+92 370 0430008 | Zain.ul.abdin558120@gmail.com" />
        <meta name="skills" content="SEO, Google Analytics 4, SaaS Marketing, Content Strategy, Social Media Marketing, Campaign Management" />
        <meta name="experience" content="Amoxt Solutions Inc., Product Marketing Associate, Data Entry Specialist" />
        <meta name="education" content="BS Computer Science, Virtual University Lahore" />
      </Helmet>
      <div className="w-full min-h-screen py-2 px-4 sm:px-6 md:px-8 lg:px-20 text-white bg-zinc-950">
      <Analytics/>
        <MouseFollow />
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-[75%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3">
              <About />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full">
                <Contact />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full">
                <Works />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:col-span-2 md:col-span-1">
                <Side />
              </motion.div>
            </div>
          </div>
          <div className="w-full mt-3 lg:mt-0 lg:w-[25%]">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {/* <Certificate /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
"use client";
import { ABOUT_TEXT } from "@/gems/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6">
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <img
            className="rounded-xl"
            src="/aboutme.png"
            alt="about"
            width="400"
            height="400"
          />
        </motion.div>
        
        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-start p-4 lg:p-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <p className="text-neutral-400 text-lg lg:mt-7 text-center lg:text-left">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

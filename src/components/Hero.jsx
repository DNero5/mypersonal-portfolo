"use client";
import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/gems/constants";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }, // Fixed typo in "transition"
    },
  });

  return (
    <div className="-mt-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full">
          <div className="flex text-white flex-col items-center">
            {/* Animated Heading */}
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-5 font-thin tracking-tight text-5xl xL:text-6xl whitespace-nowrap"
            >
              Daniel Sunday
            </motion.h1>

            {/* Animated Profile Image */}
            <motion.img
              src="/person1.png"
              alt="person"
              width="150"
              height="200"
              className="z-10 mx-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Role Description */}
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent whitespace-nowrap"
            >
              Frontend Web Developer
            </motion.span>

            {/* About Text with Jumping Animation */}
            <motion.p
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="border-b border-neutral-900 mt-4 text-base xl:text-xl font-bold text-neutral-400 text-center max-w-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Download CV Button */}
            <motion.a
              variants={container(3)}
              initial="hidden"
              animate="visible"
              href="/daniel-cv.pdf"
              download
              className="mt-5 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition duration-300 hover:scale-105"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;

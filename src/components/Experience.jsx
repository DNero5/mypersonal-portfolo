"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/gems/constants'; // Ensure correct import path

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center"
          initial={{ opacity: 0, y: -50 * (index + 1) }} // Stacks downward
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }} // Delayed effect
        >
          {/* Year Section */}
          <div className="w-full lg:w-1/3">
            <p className="mb-2 text-xl text-white">{experience.year}</p>
          </div>
          
          {/* Experience Details */}
          <div className="w-full max-w-xl lg:w-3/4 text-neutral-400">
            <h2 className="text-lg font-semibold">{experience.role}</h2>
            <p className="text-sm ">{experience.company}</p>
            <p className="mt-2 ">{experience.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;


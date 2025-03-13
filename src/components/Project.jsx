"use client";
import { PROJECTS } from "@/gems/constants";
import React, { useRef } from "react";

const Project = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl text-white">Projects</h1>

      {/* Dynamic Section */}
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 rounded-lg shadow-lg border border-gray-700"
              width={150}
              height={150}
            />
          </div>

          {/* Project Details Section */}
          <div className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center text-white">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2 max-w-lg">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Project
            </a>

            {/* Tech Stack Badges */}
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium text-purple-400 bg-gray-800 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Static Project Section - Now Matches Dynamic Layout */}
      {/* Static Project Section - Now Matches Dynamic Layout */}
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* Video Section (Replaces Image) */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <video
            ref={videoRef}
            src="/landpagevid.mp4"
            width={150}
            height={150}
            className="mb-6 rounded-lg shadow-lg border border-gray-700"
            loop
            muted
            controls
          />
        </div>

        {/* Text Section */}
        <div className="w-full max-w-xl lg:w-3/4 flex flex-col text-white items-start">
          {/* Title */}
          <h2 className="text-lg font-semibold">Sitio LandingPage</h2>

          {/* Description */}
          <p className="text-gray-400 mt-2 max-w-lg">
            A fully functional e-commerce website with features like product
            listing, shopping cart, and user authentication.
          </p>

          {/* Play Video Button (Now properly aligned below `p`) */}
          <button
            onClick={handlePlayVideo}
            className="text-blue-500 hover:underline mt-2"
          >
            Play Video
          </button>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["HTML", "CSS", "React", "Tailwind", "Next"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-800 text-purple-400 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

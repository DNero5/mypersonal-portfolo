"use client"
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const technologies = [
  { icon: RiReactjsLine, color: "text-cyan-400" },
  { icon: TbBrandNextjs, color: "" },
  { icon: SiMongodb, color: "text-green-500" },
  { icon: DiRedis, color: "text-red-700" },
  { icon: FaNodeJs, color: "text-green-500" },
  { icon: BiLogoPostgresql, color: "text-sky-700" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map(({ icon: Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-400 p-4"
            animate={{
              y: [0, -10, 0], // Floating effect
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.3, // Creates a wave effect
            }}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;



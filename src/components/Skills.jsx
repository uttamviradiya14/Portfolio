import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skillGroups = {
    "Front-end": [
      { name: "React", icon: <FaReact className="text-blue-400 text-5xl" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, level: 85 },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, level: 80 },
    ],
    "Back-end": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" />, level: 75 },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" />, level: 85 },
      { name: "Figma", icon: <FaFigma className="text-pink-500 text-5xl" />, level: 70 },
    ],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          💻 Skills
        </motion.h2>

        {Object.entries(skillGroups).map(([groupName, groupSkills], idx) => (
          <motion.div
            key={groupName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-semibold mb-10">{groupName}</h3>
            <div className="flex flex-wrap justify-center gap-12">
              {groupSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center w-32 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="#333"
                        strokeWidth="6"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="url(#grad1)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={251.2} // 2πr for r=40
                        strokeDashoffset={251.2}
                        animate={{ strokeDashoffset: 251.2 * (1 - skill.level / 100) }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-semibold text-white text-lg">
                      {skill.level}%
                    </div>
                  </div>

                  {/* Icon & Name */}
                  <div className="mt-4 text-4xl">{skill.icon}</div>
                  <span className="mt-2 font-medium text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/IMG_2196.JPG";

const skills = [
  "React",
  "Node.js",
  "TailwindCSS",
  "TypeScript",
  "Framer Motion",
  "Next.js",
  "Redux",
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const badgeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative">
        {/* ===================== IMAGE ===================== */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start relative"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Glow Ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>

            {/* Profile Image */}
            <motion.img
              src={ProfileImage}
              alt="Your Name"
              className="relative z-10 w-64 md:w-80 lg:w-96 rounded-3xl border-4 border-white/20 shadow-2xl object-cover transform transition duration-500 group-hover:scale-105"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />

            {/* ===================== Skill Badges ===================== */}
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={skill}
                  className="absolute px-3 py-1 rounded-full text-sm md:text-base font-semibold shadow-lg text-white bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
                  variants={badgeAnimation}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===================== TEXT CONTENT ===================== */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Hi! I'm{" "}
            <span className="text-blue-400 font-semibold">Viradiya Uttam</span>, a
            passionate{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              React & Full-Stack Developer
            </span>{" "}
            dedicated to building responsive, interactive, and high-performance
            web applications.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4"
          >
            I specialize in{" "}
            <span className="text-blue-300 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              modern UI/UX
            </span>{" "}
            with smooth animations, API integrations, and clean scalable code.
            My mission is to turn ideas into reality with visually stunning,
            user-friendly designs.
          </motion.p>

          <motion.a
            href="#projects"
            variants={item}
            className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full shadow-lg text-lg font-medium hover:scale-105 transition"
          >
            🚀 View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

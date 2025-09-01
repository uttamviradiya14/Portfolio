import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import heroImage from "../assets/IMG_2196.JPG";

// Typing effect hook
function useTyping(text, speed = 150) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
}

const slides = [
  {
    title: "Hi, I'm Your Name",
    subtitle: "I build modern, responsive web apps with React, Tailwind, and Node.js.",
    image: heroImage,
    gradient: "from-blue-400 via-purple-500 to-pink-400",
  },
  {
    title: "Creative Web Developer",
    subtitle: "I create smooth user experiences and interactive interfaces.",
    image: heroImage,
    gradient: "from-purple-500 via-pink-500 to-red-400",
  },
  {
    title: "Let's Build Together",
    subtitle: "I turn ideas into scalable, beautiful web applications.",
    image: heroImage,
    gradient: "from-green-400 via-blue-400 to-purple-500",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const typedText = useTyping(slides[currentSlide].title, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-black to-gray-900">
      
      {/* Background Neon Glow Circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl animate-pulse"></div>

      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide && (
            <motion.div
              key={index}
              className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-10 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* LEFT: Text */}
              <motion.div className="flex-1 text-center md:text-left">
                <motion.h1
                  className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${slide.gradient} drop-shadow-lg`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {typedText}
                  <span className="animate-blink">|</span>
                </motion.h1>

                <motion.p
                  className="text-gray-100 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-md"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
                  <motion.a
                    href="#projects"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🚀 View Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    📩 Contact Me
                  </motion.a>
                </motion.div>

                {/* Social Icons */}
                <motion.div className="flex gap-6 mt-6 text-2xl justify-center md:justify-start">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-125 transition">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-125 transition">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-125 transition">
                    <FaTwitter />
                  </a>
                </motion.div>
              </motion.div>

              {/* RIGHT: Image */}
              <motion.div className="flex-1 flex justify-center md:justify-end">
                <motion.img
                  src={slide.image}
                  alt="Hero"
                  className="w-64 md:w-80 lg:w-96 rounded-full border-4 border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.3)] object-cover"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 text-white text-3xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

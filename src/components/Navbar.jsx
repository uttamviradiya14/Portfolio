import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "about", "skills", "projects", "contact"];

  // Detect scroll for shadow effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section
      const sections = navItems.map((id) => document.getElementById(id));
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 100; // offset for navbar
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-lg shadow-xl border-b border-white/10"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <h1
          onClick={() => scroll.scrollToTop()}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
        >
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-semibold uppercase tracking-wider">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item}
                smooth
                duration={500}
                spy
                offset={-80}
                className={`cursor-pointer px-2 py-1 transition-all text-lg md:text-base ${
                  activeSection === item
                    ? "text-blue-400"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer z-50"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center gap-12 text-3xl transition-transform duration-500 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            spy
            offset={-80}
            onClick={() => setNavOpen(false)}
            className={`cursor-pointer transition-colors scale-100 hover:scale-110 ${
              activeSection === item ? "text-blue-400" : "text-white hover:text-blue-300"
            }`}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}

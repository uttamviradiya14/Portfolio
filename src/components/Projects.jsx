import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A sleek and modern personal portfolio to showcase skills, projects, and achievements.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "E-commerce App",
      desc: "A responsive e-commerce store built with React and Firebase with user authentication.",
      tech: ["React", "Firebase", "Stripe"],
    },
    {
      title: "Admin Dashboard",
      desc: "A fully-featured admin panel with charts, analytics, and CRUD operations.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      title: "Chat App",
      desc: "A real-time chat application with WebSocket and Node.js backend.",
      tech: ["Node.js", "Socket.io", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          🚀 My Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-indigo-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

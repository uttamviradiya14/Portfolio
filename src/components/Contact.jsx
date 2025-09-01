import emailjs from "emailjs-com";
import { useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(() => alert("Message sent!"), (err) => alert(err.text));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-purple-900 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Let's Connect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Have a question, idea, or collaboration in mind? Reach out, and let’s create something amazing together!
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300 hover:text-blue-400 transition">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>youremail@example.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300 hover:text-blue-400 transition">
                <FaPhone className="text-blue-400 text-xl" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300 hover:text-blue-400 transition">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>Ahmedabad, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl text-gray-300">
              <a href="#" className="hover:text-blue-400 transform hover:scale-125 transition"><FaGithub /></a>
              <a href="#" className="hover:text-blue-400 transform hover:scale-125 transition"><FaLinkedin /></a>
              <a href="#" className="hover:text-blue-400 transform hover:scale-125 transition"><FaTwitter /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 transform transition duration-300 hover:scale-[1.02]"
          >
            {/* Floating Labels */}
            <div className="relative">
              <input
                name="name"
                type="text"
                placeholder=" "
                className="peer w-full p-4 rounded-lg bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder=" "
                className="peer w-full p-4 rounded-lg bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder=" "
                className="peer w-full p-4 rounded-lg bg-white/5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99,102,241,0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

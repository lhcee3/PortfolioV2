"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

const PortalContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saianeeshg90/",
      icon: FaLinkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/lhcee3",
      icon: FaGithub,
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      href: "https://x.com/lhcee3",
      icon: FaTwitter,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:gspamad@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-400",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-black" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="italic text-gray-400">connect</span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                build
              </span>{" "}
              together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to turn your vision into reality? Let&apos;s connect and build
              something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Location & Time */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-6 text-white">Let&apos;s connect</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">India</p>
                      <p className="text-sm text-gray-400">Available worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                      <FaClock className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {new Date().toLocaleTimeString("en-US", {
                          timeZone: "Asia/Kolkata",
                          hour12: true,
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </p>
                      <p className="text-sm text-gray-400">IST (UTC+5:30)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-red-600/20 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">gspamad@gmail.com</p>
                      <p className="text-sm text-gray-400">Response within 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Follow the journey</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      className={`flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group ${link.color}`}
                    >
                      <link.icon className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-3 text-white">
                  Ready to launch your next project?
                </h4>
                <p className="text-gray-400 mb-4 text-sm">
                  From concept to deployment, I&apos;ll help bring your ideas to life with
                  cutting-edge technology and beautiful design.
                </p>
                <Link
                  href="mailto:gspamad@gmail.com"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 text-sm"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>

            {/* Right side placeholder */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-white">Ready to collaborate?</h3>
                  <p className="text-gray-400 mb-6">
                    Reach out through any of the channels and let&apos;s discuss your project.
                  </p>
                  <Link
                    href="mailto:gspamad@gmail.com"
                    className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalContact;
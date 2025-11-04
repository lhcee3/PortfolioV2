"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "Github",
    href: "https://github.com/lhcee3",
    displayText: "lhcee3",
    icon: LuGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/lhcee3",
    displayText: "@lhcee3",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saianeeshg90/",
    displayText: "Sai Aneesh",
    icon: FaLinkedinIn,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/lhcee3/",
    displayText: "lhcee3",
    icon: SiLeetcode,
  },
  {
    name: "Email",
    href: "mailto:gspamad@gmail.com",
    displayText: "gspamad@gmail.com",
    icon: MdOutlineEmail,
  },
];

const PortalFooter = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Ready to transform your ideas into digital reality? 
              Let&apos;s collaborate and create something extraordinary together.
            </p>
            <Link
              href="mailto:gspamad@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Right side - Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Connect With Me</h3>
              <div className="space-y-4">
                {socials.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-600 hover:bg-gray-900/70 transition-all group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <div>
                        <div className="font-medium text-white">{social.name}</div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {social.displayText}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Sai Aneesh. Crafted with passion and precision.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/portal" className="hover:text-white transition-colors">
              Portal
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PortalFooter;
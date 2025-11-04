"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import your existing project images
import web3 from "@/public/images/web3.png";
import Textre from "@/public/images/Textre.png";
import interview from "@/public/images/interview.png";
import dss from "@/public/images/dss.png";

const projects = [
  {
    title: "Web 3 Faucet",
    category: "Blockchain",
    description:
      "A React-based web app for sending SOL tokens via connected Solana wallets like Phantom or Backpack. Features wallet integration, SOL transfers, and optional message signing.",
    image: web3,
    liveLink: "https://web3-faucet-two.vercel.app/connect",
    githubLink: "https://github.com/lhcee3/web3-faucet",
    tags: ["React", "Solana", "Web3", "Tailwind"],
    featured: true,
  },
  {
    title: "Textre",
    category: "Full Stack",
    description:
      "An End-to-End Chat Application with real-time messaging, user authentication, and modern UI, built with Next.js, Supabase, and Socket.io.",
    image: Textre,
    liveLink: "https://textre.vercel.app/",
    githubLink: "https://github.com/lhcee3/Textre",
    tags: ["Next.js", "Supabase", "Socket.io", "TypeScript"],
    featured: true,
  },
  {
    title: "InterView Buddy",
    category: "AI/ML",
    description:
      "AI-powered interview preparation platform with mock interviews, integrating Google Gemini and Vapi API for realistic practice sessions.",
    image: interview,
    liveLink: "https://interview-blond-mu.vercel.app/sign-in",
    githubLink: "https://github.com/lhcee3/InterView",
    tags: ["Next.js", "AI", "Firebase", "Vapi API"],
    featured: false,
  },
  {
    title: "DSS Landing Page",
    category: "Web Development",
    description:
      "Official Landing Page for DSS (Developers Students Society). Fully deployed with AWS and CI/CD pipeline using GitHub Actions.",
    image: dss,
    liveLink: "https://club.dssvjit.in",
    githubLink: "https://github.com/dssvjit/shiny-garbanzo",
    tags: ["React.js", "AWS", "CI/CD", "GitHub Actions"],
    featured: false,
  },
];

const PortalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-black" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">
              My work, from{" "}
              <span className="italic text-gray-400">petal</span> to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                planet
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the digital constellations I&apos;ve crafted across
              different domains and technologies.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              Featured Work
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={projectVariants}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </Link>
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={projectVariants}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 2 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                              +{project.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            className="p-1.5 hover:text-blue-400 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </Link>
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            className="p-1.5 hover:text-blue-400 transition-colors"
                          >
                            <FaGithub className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalProjects;
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortalAbout = () => {
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

  return (
    <section ref={ref} className="py-24 px-6 bg-black" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Main content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Building tomorrow&apos;s
              <br />
              <span className="italic text-gray-400">digital experiences</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              I&apos;m a passionate developer who crafts meaningful digital
              experiences through innovative technology. From Web3 applications
              to AI-powered solutions, I transform complex ideas into elegant,
              user-centric products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 text-center"
            >
              <div>
                <div className="text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Technologies Mastered
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <motion.div
              variants={itemVariants}
              className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Frontend Development",
                    description: "React, Next.js, TypeScript, Tailwind CSS",
                    progress: 95,
                  },
                  {
                    title: "Web3 & Blockchain",
                    description: "Solana, Ethereum, Smart Contracts",
                    progress: 90,
                  },
                  {
                    title: "AI & Machine Learning",
                    description: "Python, TensorFlow, OpenAI APIs",
                    progress: 85,
                  },
                  {
                    title: "Backend Development",
                    description: "Node.js, Python, Databases",
                    progress: 88,
                  },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">{skill.title}</h4>
                      <span className="text-sm text-gray-400">
                        {skill.progress}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {skill.description}
                    </p>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.progress}%` } : { width: 0 }
                        }
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalAbout;
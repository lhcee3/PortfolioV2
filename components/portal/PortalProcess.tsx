"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLightbulb, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const processSteps = [
  {
    number: "01",
    title: "Think",
    icon: FaLightbulb,
    description:
      "I read the soil to find where ideas take root, uncovering opportunities, directions, and missions.",
    details: [
      "Research & Discovery",
      "Market Analysis",
      "Strategy Development",
      "Technical Planning",
    ],
  },
  {
    number: "02",
    title: "Create",
    icon: FaPalette,
    description:
      "I coax the invisible into the inevitable, crafting identities and systems to support your growth.",
    details: [
      "UI/UX Design",
      "Brand Identity",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    number: "03",
    title: "Build",
    icon: FaCode,
    description:
      "I engineer scalable digital products and experiences ready for real-world impact.",
    details: [
      "Frontend Development",
      "Backend Architecture",
      "Database Design",
      "API Integration",
    ],
  },
  {
    number: "04",
    title: "Scale",
    icon: FaRocket,
    description:
      "I tend and graft, evolving your footprint so that you may bear fruit.",
    details: [
      "Performance Optimization",
      "DevOps & CI/CD",
      "Monitoring & Analytics",
      "Maintenance & Support",
    ],
  },
];

const PortalProcess = () => {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-black" id="process">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">
              My{" "}
              <span className="italic text-gray-400">process</span>,{" "}
              <br className="hidden md:block" />
              crafted through{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                years
              </span>{" "}
              of experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From initial concept to final deployment, I follow a proven
              methodology that ensures exceptional results every time.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="group relative"
              >
                {/* Step Number */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-bold text-gray-600">
                        {step.number}
                      </span>
                      <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-6 leading-relaxed ml-26">
                  {step.description}
                </p>

                {/* Details */}
                <div className="ml-26">
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.2 + detailIndex * 0.1,
                        }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Progress Line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-10 top-24 w-0.5 h-32 bg-gradient-to-b from-gray-700 to-transparent lg:block hidden"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-24 text-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-300">
              Powered by cutting-edge technology
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Solana",
                "AWS",
                "Firebase",
                "Supabase",
                "TailwindCSS",
                "Framer Motion",
                "OpenAI",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors duration-300"
                >
                  <span className="text-sm font-semibold text-gray-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalProcess;
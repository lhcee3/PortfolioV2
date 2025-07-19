import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Textre from "@/public/images/Textre.png";
import web3 from "@/public/images/web3.png";
import interview from "@/public/images/interview.png";
import dss from "@/public/images/dss.png";
import Chattr from "@/public/images/chattr.png";

import Link from "next/link";

const projects = [
  {
    title: "Web 3 Faucet",
    description:
      "A React-based web app for sending SOL tokens via connected Solana wallets like Phantom or Backpack. It features wallet integration, SOL transfers, and optional message signing.",
    image: web3,
    liveLink: "https://web3-faucet-two.vercel.app/connect",
    githubLink: "https://github.com/lhcee3/web3-faucet",
    tags: [
      "React",
      "Tailwind",
      "Solana",
      "Wallet Adapter",
      "bs-58",
      "bcryptjs",
      "noble-ed25519",
    ],
  },

  {
    title: "Textre",
    description:
      "A End to End Chat Application with real-time messaging, user authentication, and a modern UI, built with Next.js, Supabase, and Socket.io for seamless communication.",
    image: Textre,
    liveLink: "https://textre.vercel.app/",
    githubLink: "https://github.com/lhcee3/Textre",
    tags: [
      "Next.js",
      "Supabase",
      "Socket.io",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
    ],
  },

  {
    title: "InterView Buddy",
    description:
      "Interview Buddy is a website project designed to help you prepare for job interviews by integrating AI models. The platform offers a sleek and modern experience, allowing you to practice with AI-driven mock interviews.",
    image: interview,
    liveLink: "https://interview-blond-mu.vercel.app/sign-in",
    githubLink: "https://github.com/lhcee3/InterView",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Vapi API", "Google Gemini", "Zod"],
  },
  {
    title: "DSS Landing Page",
    description:
      "Active Contributor for the Official Landing Page for DSS (Developers Students Society), our college's official student chapter.Fully deployed with AWS and Worflow CI/CD with Github Actions.",
    image: dss,
    liveLink: "https://club.dssvjit.in",
    githubLink: "https://github.com/dssvjit/shiny-garbanzo",
    tags: ["React.js", "CI/CD", "Node.js", "TypeScript", "Github Actions", "AWS"],
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="text-3xl xl:text-5xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Link href={project.liveLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" />
              </Link>
            </div>
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

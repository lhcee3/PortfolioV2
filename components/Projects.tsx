import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Regal from "@/public/images/regal.png";
import Bytes from "@/public/images/bytes.png";
import ContiqAI from "@/public/images/contiqai.png";
import Chattr from "@/public/images/chattr.png";
import Page from "@/public/images/page.png";
import Link from "next/link";

const projects = [
  {
    title: "Regal Estate",
    description:
      "A secure full-stack real estate app with dynamic property listings, detailed property pages, and landlord contact features, enhancing user engagement and efficiency.",
    image: Regal,
    liveLink: "https://regal-estate.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/Regal-Estate",
    tags: [
      "MERN",
      "Zod",
      "JWT",
      "TypeScript",
      "Firebase",
      "bcryptjs",
      "Tailwind CSS",
    ],
  },

  {
    title: "ContiqAI",
    description:
      "AI-powered tool to quickly create high-quality content for social media.",
    image: ContiqAI,
    liveLink: "https://contiq-ai.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/contiqAI",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
      "Clerk",
      "TypeScript",
      "shadcn/ui",
    ],
  },

  {
    title: "Modern SaaS Landing Page",
    description:
      "A modern SaaS landing page using Tailwind CSS, TypeScript, Next.js, and Framer Motion to create a visually appealing user interface with engaging animations.",
    image: Page,
    liveLink: "https://landing-page-rho-hazel.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/landing-page",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Chattr",
    description:
      "An anonymous chat application enabling private, temporary conversations between users with real-time communication.",
    image: Chattr,
    liveLink: "https://chattr-orpin.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/chattr",
    tags: ["React.js", "ws", "Node.js", "TypeScript", "Render", "Vercel"],
  },
  {
    title: "Bytes",
    description:
      "A full-stack blogging app inspired by Medium, with JWT authentication, TypeScript and Zod validation, and scalable deployment via Vercel and Cloudflare Workers.",
    image: Bytes,
    liveLink: "https://bytes-kohl.vercel.app/",
    githubLink: "https://github.com/tanishkadeep/Bytes",
    tags: [
      "React.js",
      "PostgreSQL",
      "Prisma",
      "Hono",
      "TypeScript",
      "Cloudflare Workers",
      "Vercel",
      "Zod",
    ],
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
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

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-bold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              VISWAM.AI
            </h3>
            <p className="sm:text-lg italic">AI Developer Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              May 2025 – June 2025
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
          Interned at the prestigious Summer of AI 2025 (SoAI) internship program by VISWAM.AI, in collaboration with 
          IIIT Hyderabad — one of India&apos;s most esteemed research institutions. Gained hands-on experience in AI and 
          machine learning through real-world projects involving Python, DevOps, and collaborative software practices. 
          Worked on locally sourced data, fine-tuned AI models, and contributed to impactful applications within an 
          open-source and innovation-driven ecosystem.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;

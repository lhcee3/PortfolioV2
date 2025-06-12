import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          {" "}
          I am a <b>Bangalore-based full-stack developer </b>specializing in{" "}
          <b>AI&ML</b>, currently pursuing a B.E. at Ramaiah Institute of
          Technology (CGPA: <b>9.5/10</b>). Skilled in{" "}
          <b>React, Next.js, TypeScript, Python, and Node.js</b>, I create
          scalable, user-friendly web applications. My projects include Regal
          Estate (real estate platform), Bytes (blogging app) and ContiqAI
          (AI-powered tool to create content).
          <br />
          During my internship at <b>Larsen & Toubro Defence</b>, I gained
          hands-on experience in synthetic data generation, computer vision, and
          predictive maintenance, while optimizing algorithms for real-time
          applications. Passionate about innovation and continuous learning, I
          bring strong technical skills and problem-solving to every endeavor.{" "}
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;

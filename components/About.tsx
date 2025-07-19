import React from "react";
import { WobbleCard } from "./ui/wobble-card";


const About: React.FC = () => {
  return (
    <div className="relative max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-bold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium relative z-10">
          I am a <b>Hyderabad-based AI developer</b> with a strong technical foundation and a growing specialization in <b>deep learning and artificial intelligence</b>. My work spans across building robust, visually engaging full stack web applications and exploring the transformative capabilities of machine learning systems.  
          <br /><br />
          As the <b>Tech Lead of the Algorand Blockchain Committee</b> and an active <b>Web3 contributor</b>, I’m deeply involved in decentralized technologies and blockchain development. My experience includes developing open-source solutions, mentoring peers, and leading innovation in hackathon environments—earning recognition as a <b>3× Hackathon Winner</b> and <b>Smart India Hackathon 2024 Finalist</b>.  
          and a committed <b>FOSS enthusiast</b>
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;


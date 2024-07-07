import React from "react";

import { Spotlight } from "./ui/spotlight";
import { DotBackgroundDemo } from "./ui/background";
import { TextGenerateEffect } from "./ui/text_generate";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
      <DotBackgroundDemo />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-blue-100 uppercase text-xs text-center max-w-80">
            Using Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl capitalize"
            words="transforming your dreams and ideas into Seamless websites"
          />
          <p className="text-center mb-4 capitalize md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Mohamed Gamal, a Front-End and Cross-Platform Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

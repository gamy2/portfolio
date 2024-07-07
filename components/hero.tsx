import React from "react";

import { Spotlight } from "./ui/Spotlight";
import { DotBackgroundDemo } from "./ui/background";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
      <DotBackgroundDemo />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-blue-100 uppercase text-xs text-center max-w-80">
            Hello Next.js
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

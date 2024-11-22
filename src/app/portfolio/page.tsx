"use client"
import HeroSection from "@/components/shared/pageSection/homePageSection/HeroSection";
import React from "react";
import { IMAGES } from "../../../public/images";
import ProjectSection from "@/components/shared/pageSection/portfolioPageSection/ProjectSection";
import ReadyToBuild from "@/components/shared/pageSection/servicePageSection/ReadyToBuild";
import { useMyContext } from "@/contexts/MyContexts";

export default function Portfolio() {
  const {theme} = useMyContext();
  return (
    <div className={` ${ theme === "light" ? "bg-white" : "bg-black"} `}>
      <HeroSection
        img={IMAGES.PORTIMG}
        imgH={250}
        imgW={250}
        bgImg={IMAGES.PORTBG}
        imgSpin={false}
        heading="Our Work"
        paragraph="NetixSol is a product development house for Web3, AI & Machine
          Learning technology, focused on design, development, and
          Blockchain consulting. Check out some projects we’ve produced for
          visionary builders and Blockchain entrepreneurs."
        headingFont={64}
      />
      
      
      <ProjectSection/>
      <ReadyToBuild/>
    </div>
  );
}

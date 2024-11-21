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
      <ProjectSection
        heading="MoonBase Alpha"
        paragraph="A revolutionary liquid staking protocol bringing node operators and validators together."
        list1="Product Launch Strategy"
        list2="
           Smart Contract Development"
        list3="
         liquid staking innovation"
        list4="
        UI/UX for Operator Staker collaboration"
        img={IMAGES.PROJECT1}
      />
      <ProjectSection
        flow={true}
        heading="Web3Indexer"
        paragraph="Enterprise-grade APIs and real-time blockchain data that make Web3 development as easy as Web2."
        list1="Market Place Aggregator"
        list2="
           Blockchian Indexer"
        list3="
         NFT Explorer"
        list4="UI/UX for Web3 Indexer"
        img={IMAGES.PROJECT2}
      />
      <ProjectSection
        heading="Kwikswap"
        paragraph="A revolutionary liquid staking protocol bringing node operators and validators together"
        list1="Product Launch Strategy"
        list2="Smart Contract Development"
        list3="liquid staking innovation"
        list4="UI/UX for Operator Staker collaboration"
        img={IMAGES.PROJECT3}
      />
      <ReadyToBuild/>
    </div>
  );
}

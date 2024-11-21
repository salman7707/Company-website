"use client";
import Button from "@/components/template/button/Button";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function CareerHeadingSection() {
  const { theme } = useMyContext();
  return (
    <div className="relative w-full max-w-[1210px] mx-auto pt-56 pb-10">
      <div className="w-full flex flex-col items-center justify-between gap-y-6 md:px-36 px-8">
        <HeaderLarge
          color={theme === "light" ? "black" : "white"}
          fontSize="64"
          mdScreenFont="48"
          smallScreenFont="46"
          textAlign="text-center"
          fontFamily="font-custom"
          weight="medium"
        >
          Want to join the <span className="text-primary">NetixSol team?</span>
        </HeaderLarge>
        <Paragraph
          color={theme === "light" ? "black" : "white"}
          fontSize="extralarge"
          fontFamily="font-custom"
          weight="normal"
          textAlign="text-center"
        >
          NetixSol is a Blockchain development Compnay for innovative Web3, AI &
          Machine Learning technology focused on design, development, and
          blockchain consulting.Become the Blockchain Wizard! Join our Dgen
          Revolution Now!
        </Paragraph>
        <Button fontSize="large" bgColor="primary" color="white">
          See avaliable positions
        </Button>
      </div>
    </div>
  );
}

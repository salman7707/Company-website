"use client"
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function HeadingSection() {
  const {theme} = useMyContext();
  return (
    <div className="relative w-full max-w-[1210px] mx-auto md:px-28 px-8 pt-56 pb-10">
      <HeaderLarge
        color={ theme === "light" ? "black":"white"}
        fontSize="64"
        mdScreenFont="48"
        smallScreenFont="46"
        textAlign="text-center"
        fontFamily="font-custom"
        weight="medium"
      >
        Get in touch
      </HeaderLarge>
      <Paragraph color={ theme === "light" ? "black":"white"} fontSize="extralarge" textAlign="text-center">
        Book a free consultation or send us a message to tell us about your
        idea, and find out how we can bring your vision to life.
      </Paragraph>
    </div>
  );
}

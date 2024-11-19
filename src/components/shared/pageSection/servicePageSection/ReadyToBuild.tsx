"use client";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Button from "@/components/template/button/Button";

export default function ReadyToBuild() {
  return (
    <div
      className="bg-cover bg-center h-auto rounded-3xl w-full my-24 py-24 px-8 max-w-[1250px] mx-auto"
      style={{ backgroundImage: `url(${IMAGES.COVER})` }}
    >
      <div className="w-[50%] space-y-4 rounded-2xl">
        <HeaderLarge
          color="black"
          fontSize="48"
          fontFamily="font-custom"
          weight="medium"
        >
          Ready to Build?
        </HeaderLarge>
        <Paragraph color="black" fontSize="large">
          Book a free consult with our senior team. We’ll advise you on the best
          approach to achieve your vision.
        </Paragraph>
        <Button fontSize="large" bgColor="primary" color="white" size="large" >Book a Free Consultant</Button>
      </div>
    </div>
  );
}

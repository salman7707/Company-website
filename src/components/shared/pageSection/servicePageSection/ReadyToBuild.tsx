"use client";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Button from "@/components/template/button/Button";
import { useMyContext } from "@/contexts/MyContexts";

export default function ReadyToBuild() {
  const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light" ? "bg-white" : "bg-black" } bg-black h-full w-full max-w-[1210px] mx-auto py-24 -my-1`}>
      <div
        className="bg-cover bg-center bg-black h-auto rounded-3xl xl:w-full w-[95%] md:py-24 py-16 md:px-8 px-4  mx-auto"
        style={{ backgroundImage: `url(${IMAGES.COVER})` }}
      >
        <div className="md:w-[50%] flex flex-col md:items-start items-center justify-center space-y-4 rounded-2xl">
          <HeaderLarge
            color="primary"
            fontSize="48"
            smallScreenFont="36"
            fontFamily="font-custom"
            weight="medium"
          >
            Ready to Build?
          </HeaderLarge>
          <Paragraph
            color="black"
            fontSize="large"
            textAlign="md:text-left text-center"
          >
            Book a free consult with our senior team. We’ll advise you on the
            best approach to achieve your vision.
          </Paragraph>
          <Button fontSize="large" bgColor="primary" color="white" size="large">
            Book a Free Consultant
          </Button>
        </div>
      </div>
    </div>
  );
}

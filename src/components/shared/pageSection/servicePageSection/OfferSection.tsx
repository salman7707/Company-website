"use client";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import OurExpertise from "@/lib/OurExperties";
import { useMyContext } from "@/contexts/MyContexts";
export default function OfferSection() {
  const {theme} = useMyContext();
  return (
    <div className={`${ theme === "light" ? "bg-white" : "bg-black" } w-full relative z-10 `}>
      <div className="relative py-14 w-[100%] max-w-[1210px] mx-auto z-10">
        <div className="space-y-4">
          <Paragraph
            textAlign="text-center"
            color="primary"
            fontSize="extralarge"
          >
            WHAT WE OFFER
          </Paragraph>
          <HeaderLarge
            color={theme === "light" ?"black" : "white"}
            textAlign="text-center"
            fontSize="36"
            weight="medium"
            smallScreenFont="36"
            fontFamily="font-custom"
          >
            Our Expertise
          </HeaderLarge>
        </div>
        <div className="py-14 xl:px-0 px-10 w-full grid lg:grid-cols-2 grid-cols-1 xl:gap-x-32 lg:gap-x-36 lg:gap-y-14 gap-y-4 justify-content-between">
          {OurExpertise.map((data) => (
            <div
              key={data.id}
              className="flex lg:flex-row flex-col lg:justify-start lg:items-start items-center md:justify-center h-full w-full space-x-2"
            >
              <div>
                <h1 className={`text font-custom ${ theme==="light" ? "text-white":"text-black" } `}>{data.id}.</h1>
              </div>
              <div className="px-3 py-3 space-y-6 xl:w-full lg:w-full  w-full h-auto">
                <HeaderLarge
                  color={theme === "light" ?"black" : "white"}
                  fontSize="40"
                  smallScreenFont="36"
                  fontFamily="font-custom"
                  weight="medium"
                  textAlign="lg:text-left text-center"
                >
                  {data.heading}
                </HeaderLarge>
                <Paragraph
                  fontSize="extralarge"
                  textAlign="lg:text-left text-center "
                  color={theme === "light" ?"black" : "white"}
                >
                  {data.paragraph}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

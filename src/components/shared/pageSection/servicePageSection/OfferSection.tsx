"use client";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import OurExpertise from "@/lib/OurExperties";
export default function OfferSection() {
  return (
    <div className="bg-white w-full relative z-10 ">
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
            color="black"
            textAlign="text-center"
            fontSize="36"
            weight="medium"
            fontFamily="font-custom"
          >
            Our Expertise
          </HeaderLarge>
        </div>
        <div className="py-20 xl:px-0 px-10 w-[100%] grid lg:grid-cols-2 grid-cols-1 xl:gap-x-32 lg:gap-x-2 lg:gap-y-32 gap-y-4 items-center">
          {OurExpertise.map((data) => (
            <div
              key={data.id}
              className="flex lg:flex-row flex-col lg:justify-start lg:items-start items-center md:justify-center h-full w-full space-x-2"
            >
              <div>
                <h1 className="text font-custom text-white">{data.id}.</h1>
              </div>
              <div className="px-3 py-3 space-y-6 xl:w-full lg:w-[70%] w-full h-auto">
                <HeaderLarge
                  color="black"
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
                  color="black"
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

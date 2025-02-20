"use client";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import { useMyContext } from "@/contexts/MyContexts";
import featuredImg from "@/lib/featuredImg";
import Image from "next/image";

export default function FeaturedSection() {
  const { theme } = useMyContext();
  return (
    <div className="flex flex-col items-center justify-between py-20 w-full max-w-[1210px] mx-auto">
      <div className="flex px-4 flex-col items-center justify-center space-y-3">
        <Paragraph
          color={theme === "light" ? "black" : "white"}
          textAlign="text-center"
          fontSize="large"
          fontFamily="font-custom"
          weight="medium"
        >
          FEATURED CLIENTS
        </Paragraph>
        <HeadingLarge
          fontFamily="font-custom"
          color={theme === "light" ? "black" : "white"}
          fontSize="64"
          textAlign="text-center"
          smallScreenFont="36"
          weight="medium"
        >
          We partner with web3 companies
        </HeadingLarge>
        <Paragraph
          color={theme === "light" ? "black" : "white"}
          fontSize="extralarge"
          fontFamily="font-custom"
          weight="medium"
          textAlign="text-center"
        >
          Leading review and rating platforms say we are the top
          <br />
          development company. We don’t mind.
        </Paragraph>
      </div>
      {/* xl:w-[100%] xl:h-[100%] lg:w-[70%] lg:h-[70%] md:w-[50%] md:h-[50%]  */}
      <div className="whitespace-nowrap inline-block pt-20 overflow-hidden xl:w-[100%] md:w-[200%] xs:w-[350%]">
        <div className="scroll inline-block space-x-2">
          {featuredImg.map((data) => (
            <div
              key={data.id}
              className="inline-block align-middle w-auto h-auto whitespace-nowrap"
            >
              <Image
                src={
                  data.id === 1
                    ? theme === "light"
                      ? IMAGES.ALPHA
                      : IMAGES.ALPHAW
                    : data.src
                }
                width={300}
                height={150}
                alt="alpha"
                className=" w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="scroll inline-block space-x-2">
          {featuredImg.map((data) => (
            <div
              key={data.id}
              className="inline-block align-middle w-auto h-auto whitespace-nowrap"
            >
              <Image
                src={
                  data.id === 1
                    ? theme === "light"
                      ? IMAGES.ALPHA
                      : IMAGES.ALPHAW
                    : data.src
                }
                width={300}
                height={150}
                alt="alpha"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

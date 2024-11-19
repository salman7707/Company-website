"use Client";
import React from "react";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Image from "next/image";
import Button from "@/components/template/button/Button";
import Paragraph from "@/components/template/headings/Paragraph";
import { IMAGES } from "../../../../../public/images";

interface HeroData {
  imgH?: number;
  imgW?: number;
  img?: string;
  imgSpin?: boolean;
  heading?: string;
  headingFont?: number;
  paragraph?:string;
  bgImg?:string;
}

export default function HeroSection({
  img,
  imgH,
  imgW,
  imgSpin,
  heading,
  headingFont,
  paragraph,
  bgImg,
}: HeroData) {
  return (
    <div className="pt-44 h-auto relative">
      <div className="flex lg:flex-row flex-col-reverse items-center relative z-10 justify-end xl:w-full lg:w-[90%] max-w-[1210px] mx-auto gap-4">
        <div className="lg:w-full md:w-[40%] w-11/12 xs:items-center py-8 space-y-6 flex lg:items-start justify-between flex-col">
          <HeadingLarge
            fontSize={`${headingFont}`}
            smallScreenFont="36"
            mdScreenFont="64"
            fontFamily="font-custom"
            color="black"
            weight="medium"
            leading="custom"
            textAlign="lg:text-left text-center"
          >
            {heading}
          </HeadingLarge>

          <Paragraph
            fontSize="large"
            fontFamily="font-manrope"
            color="black"
            weight="normal"
            textAlign="lg:text-left xs:text-center"
          >
           {paragraph}
          </Paragraph>
          <Button bgColor="primary" size="large" color="white">
            Get Free Consultation
          </Button>
        </div>
        <div className="lg:w-full flex justify-center sm:w-1/2 xs:w-11/12">
          <Image
            src={img || IMAGES.HEROMAIN}
            className={`${imgSpin ? "animate-spin-slow" : ""} `}
            alt="dimand"
            layout="intrinsic"
            height={imgH}
            width={imgW}
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,460px"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="absolute top-10 bg-cover  bg-no-repeat z-0 h-[933px] bg-white w-full"
      ></div>
    </div>
  );
}

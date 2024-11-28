"use Client";
import React from "react";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Image from "next/image";
import Button from "@/components/template/button/Button";
import Paragraph from "@/components/template/headings/Paragraph";
import { IMAGES } from "../../../../../public/images";
import { useMyContext } from "@/contexts/MyContexts";
import { HeroData } from "../../types/componentTypes/HeroSection";

export default function HeroSection({
  img,
  imgH,
  imgW,
  imgSpin,
  heading,
  headingFont,
  paragraph,
  bgImg,
  imgSecondPortf,
}: HeroData) {
  const { theme } = useMyContext();
  return (
    <div
      className={`${
        img === IMAGES.PORTIMG ? " pt-60 pb-14" : "pt-44 pb-4"
      }   h-auto relative`}
    >
      <div className="flex lg:flex-row flex-col-reverse items-center relative z-10 justify-end xl:w-full lg:w-[90%] max-w-[1210px] mx-auto gap-4">
        <div className="lg:w-full md:w-[40%] w-11/12 xs:items-center py-8 space-y-6 flex lg:items-start justify-between flex-col px-4">
          <HeadingLarge
            fontSize={`${headingFont}`}
            smallScreenFont="36"
            mdScreenFont="64"
            fontFamily="font-custom"
            color={theme === "light" ? "black" : "white"}
            weight="medium"
            leading="custom"
            textAlign="lg:text-left text-center"
          >
            {heading}
          </HeadingLarge>

          <Paragraph
            fontSize="large"
            fontFamily="font-manrope"
            color={theme === "light" ? "black" : "white"}
            weight="normal"
            textAlign="lg:text-left xs:text-center"
          >
            {paragraph}
          </Paragraph>
          <Button bgColor="primary" size="large" color="white">
            Get Free Consultation
          </Button>
        </div>
        <div
          className={`lg:w-full relative group flex justify-center sm:w-1/2 xs:w-11/12 ${
            img === IMAGES.PORTIMG ? "lg:py-0 md:py-52 xs:py-28" : ""
          } `}
        >
          {img === IMAGES.PORTIMG && (
            <div className="md:block absolute xl:-top-60 lg:-top-64 xs:hidden xl:right-[70%] lg:right-[50%] md:right-0 md:left-0 md:-top-10">
              <Image
                src={imgSecondPortf || IMAGES.PORTBLUR}
                className={
                  "transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-[-12deg] group-hover:blur-sm  group-hover:grayscale-0"
                }
                alt="dimand"
                layout="intrinsic"
                height={180}
                width={190}
                sizes="(max-width:640px)100vw,(max-width:1024px)50vw,460px"
              />
            </div>
          )}
          <div
            className={`${
              img === IMAGES.PORTIMG
                ? "absolute xl:-top-10 lg:-top-8 md:top-40 -top-20 xl:right-60 lg:right-36 md:right-28"
                : ""
            }`}
          >
            <Image
              src={img || IMAGES.HEROMAIN}
              className={`${imgSpin ? "animate-spin-slow" : ""} ${
                img === IMAGES.PORTIMG
                  ? "transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-12  group-hover:grayscale-0"
                  : ""
              } `}
              alt="dimand"
              height={imgH || 100}
              width={imgW || 100}
              sizes="(max-width:640px)100vw,(max-width:1024px)50vw,460px"
            />
          </div>
        </div>
      </div>
      <div
        className={`z-0 bg-cover bg-transparent absolute bg-center bg-no-repeat ${
          bgImg === IMAGES.PORTBG
            ? "-top-6 right-0 bg-right-top xl:w-[43%] lg:w-[64%] md:w-[75%] md:h-[58%] h-[40%] lg:h-full"
            : bgImg === "none"
            ? "hidden"
            : "top-10 lg:h-full md:h-[45%] h-[20%] w-full"
        }`}
      >
        {bgImg !== "none" && (
          <Image
            src={bgImg || IMAGES.BGHERO} // Fallback to IMAGES.BGHERO if bgImg is undefined
            alt="BG"
            width={1210}
            height={960}
            className="w-full h-full"
          />
        )}
        {/* style={{
          backgroundImage: `url(${bgImg})`,
        }} */}
      </div>
    </div>
  );
}

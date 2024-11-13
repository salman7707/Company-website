"use Client";
import React from "react";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Image from "next/image";
import { IMAGES } from "../../../../../public/images";
import Button from "@/components/template/button/Button";
import Paragraph from "@/components/template/headings/Paragraph";

export default function HeroSection() {
  return (
    <div className="pt-44 h-auto relative">
      <div className="flex lg:flex-row flex-col-reverse items-center relative z-10 justify-end xl:w-full lg:w-[90%] max-w-[1210px] mx-auto gap-4">
        <div className="lg:w-full md:w-[40%] w-11/12 xs:items-center py-8 space-y-6 flex lg:items-start justify-between flex-col">
          <HeadingLarge
            fontSize="64"
            smallScreenFont="36"
            mdScreenFont="64"
            fontFamily="font-custom"
            color="black"
            weight="medium"
            leading="custom"
            textAlign="lg:text-left text-center"
          >
            We Build, You Grow, Blockchain Flow
          </HeadingLarge>

          <Paragraph
            fontSize="large"
            fontFamily="font-manrope"
            color="black"
            weight="normal"
            textAlign="lg:text-left xs:text-center"
          >
            We&apos;re at the forefront of blockchain technology. As a dedicated
            blockchain development company, we specialize in crafting secure,
            decentralized solutions that drive digital transformation. Our
            mission is to empower businesses with innovative, tailor-made
            blockchain solutions, delivering expertise, security, and
            transparency. With a team of seasoned experts, we help our clients
            embrace the future with blockchain technology. Join us in reshaping
            industries and building trust in a decentralized world.
          </Paragraph>
          <Button bgColor="primary" size="large" color="white">
            Get Free Consultation
          </Button>
        </div>
        <div className="lg:w-full flex justify-center sm:w-1/2 xs:w-11/12">
          <Image
            src={IMAGES.HEROMAIN}
            className="animate-spin-slow"
            alt="dimand"
            layout="responsive"
            height={450}
            width={460}
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,460px"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/herobg.png')",
        }}
        className="absolute top-10 bg-cover  bg-no-repeat z-0 h-[933px] bg-white w-full"
      ></div>
    </div>
  );
}

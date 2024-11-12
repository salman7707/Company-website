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
      <div className="flex items-center relative z-10 justify-end w-full max-w-[1210px] mx-auto gap-4">
        <div className="w-full py-8 text-left space-y-6 flex items-start justify-between flex-col">
          <HeadingLarge
            fontSize="64"
            fontFamily="font-custom"
            color="black"
            weight="medium"
            leading="custom"
          >
            We Build, You Grow, Blockchain Flow
          </HeadingLarge>

          <Paragraph
            fontSize="large"
            fontFamily="font-manrope"
            color="black"
            weight="normal"
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
        <div className="w-full flex justify-center">
          <Image
            src={IMAGES.HEROMAIN}
            className="animate-spin-slow"
            alt="dimand"
            height={450}
            width={460}
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/herobg.png')",
        }}
        className="absolute top-10 bg-cover bg-no-repeat z-0 h-[933px] bg-white w-full"
      ></div>
    </div>
  );
}

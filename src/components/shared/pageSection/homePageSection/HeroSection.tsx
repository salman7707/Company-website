"use Client";
import React from "react";
import HeadingLarge from "@/components/template/Header/HeadingLarge";
import Image from "next/image";
import { IMAGES } from "../../../../../public/images";
import HeadingSmall from "@/components/template/Header/HeadingSmall";
import Button from "@/components/template/button/Button";

export default function HeroSection() {
  return (
    <div>
      <div className="flex items-center justify-end w-full max-w-[1210px] mx-auto gap-4">
        <div className="w-full py-8 text-left space-y-6 flex items-start justify-between flex-col">
          <HeadingLarge
            fontSize="regular"
            fontFamily="font-manrope"
            color="black"
            weight="semibold"
            leading="custom"
          >
            We Build, You Grow, Blockchain Flow
          </HeadingLarge>

          <HeadingSmall
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
          </HeadingSmall>
          <Button BgColor="primary" size="large" Color="white">
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
    </div>
  );
}

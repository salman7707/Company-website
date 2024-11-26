"use client";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import { useMyContext } from "@/contexts/MyContexts";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import LifeImages from "@/lib/LifeImages";

export default function LifeSection() {
  const { theme } = useMyContext();
  return (
    <div className="py-10 relative w-full max-w-[1210px] mx-auto">
      <div className="">
        <HeaderLarge
          color={theme === "light" ? "black" : "white"}
          fontSize="40"
          smallScreenFont="36"
          textAlign="text-center"
        >
          Life at Demo
        </HeaderLarge>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 py-12 justify-items-center xl:px-0 px-6 ">
        {LifeImages.map((data) => (
          <div className="rounded-3xl " key={data.id}>
            <Image
              src={IMAGES.TOUR}
              width={300}
              height={228}
              alt="Demo"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

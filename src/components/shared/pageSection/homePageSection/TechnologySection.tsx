import HeaderLarge from "@/components/template/headings/HeaderLarge";
import HeaderMedium from "@/components/template/headings/HeaderMedium";
import Image from "next/image";
import React from "react";
import ImageData from "@/lib/images";
import { IMAGES } from "../../../../../public/images";

export default function TechnologySection() {
  return (
    <div className="relative z-10">
      <div className="relative z-10 py-10 w-full max-w-[1210px] mx-auto">
        <div className=" flex flex-col items-center justify-centerlg:pt-14 pt-10 space-y-3">
          <HeaderMedium color="primary">WORK ON TECHNOLOGY</HeaderMedium>
          <HeaderLarge
            fontSize="64"
            color="white"
            smallScreenFont="36"
            textAlign="text-center"
            fontFamily="font-custom"
            weight="medium"
          >
            What we are working with
          </HeaderLarge>
        </div>
        <div className="w-[100%] mx-auto py-8 lg:flex flex-wrap  hidden">
          {ImageData.map((image: { id: number; src: string }) => (
            <div
              key={image.id}
              className="group bg-transparent hover:bg-[#202020] w-[150px] h-[150px] flex items-center justify-center"
            >
              <Image
                src={image.src}
                width={70}
                height={70}
                alt="Trust"
                className="grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* setting this for small screens */}

        <div className="w-[90%] lg:hidden inline-block whitespace-nowrap py-10">
          <div className="inline-block whitespace-nowrap scroll space-x-10">
            {ImageData.map((image: { id: number; src: string }) => (
              <div key={image.id} className="inline-block">
                <Image
                  src={image.src || IMAGES.TRUST}
                  alt="technologys"
                  width={100}
                  height={100}
                  className="w-20 h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('/images/sideImage/serviceBg.png')",
        }}
        className="absolute  bottom-0 left-0 right-0 z-0 w-full h-full sm:bg-cover "
      ></div>
    </div>
  );
}

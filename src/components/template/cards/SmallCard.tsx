import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/images";
import HeaderMedium from "../headings/HeaderMedium";

interface cardData {
  img?: string;
  heading?: string | React.ReactNode;
}

export default function SmallCard({img,heading}:cardData) {
  return (
    <div className="flex w-full max-w-[290px] h-[240px] flex-col items-center justify-center bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] xl:px-12 lg:px-4 px-12 py-6 space-y-6 rounded-3xl border-2 border-black hover:bg-gradient-to-r hover:from-black hover:to-black hover:border-b-8  transition duration-500 hover:border-blue-600 ">
      <Image src={img || IMAGES.FRAME} width={60} height={60} alt="frame" />
      <HeaderMedium fontSize="26" textAlign="center" color="white" fontFamily="font-custom" weight="medium" >{heading}</HeaderMedium>
    </div>
  );
}

import React from "react";
import Paragraph from "../headings/Paragraph";
import HeaderMedium from "../headings/HeaderMedium";
import { testimonialCardTypes } from "@/components/shared/types/templeteTypes/TestimonialCard";

export default function TestimonialCard({
  heading,
  location,
  massage,
}: testimonialCardTypes) {
  return (
    <div className="flex flex-col cursor-pointer px-6 py-6 items-start justify-center space-y-1 rounded-3xl bg-darkpurple xl:w-[370px] xl:h-[280px] lg:w-[310px] lg:h-[260px] md:w-[320px] md:h-[270px] w-full h-[270px] max-h-[300px]">
      <HeaderMedium
        color="white"
        fontSize="20"
        fontFamily="font-custom"
        weight="medium"
      >
        {heading}
      </HeaderMedium>
      <Paragraph
        fontSize="medium"
        weight="light"
        color="white"
        fontFamily="font-manrope"
      >
        {location}
      </Paragraph>
      <Paragraph
        fontSize="medium"
        color="white"
        weight="light"
        fontFamily="font-manrope"
      >
        {massage}
      </Paragraph>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import HeaderMedium from "../headings/HeaderMedium";
import Paragraph from "../headings/Paragraph";
import { FaClock } from "react-icons/fa";
import { IMAGES } from "../../../../public/images";
import { CourseCardData } from "@/components/shared/types/templeteTypes/CoursesCard";

export default function CoursesCard({
  src,
  category,
  time,
  heading,
}: CourseCardData) {
  return (
    <div className="w-full h-full md:space-y-2 space-y-3">
      {/* IMG Section */}
      <div className="relative w-auto h-auto scale-100 hover:scale-105 transition-all duration-200 ease-in shadow-lg shadow-black rounded-lg">
        <Image
          src={src || IMAGES.COURSE1}
          width={400}
          height={400}
          alt="img"
          className="rounded-lg w-full xl:h-[290px] lg:h-[200px] h-[200px]"
        />
        <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-bold px-4 py-2 ">
          <HeaderMedium color="white" fontSize="18">
            10% Off
          </HeaderMedium>
        </div>
      </div>
      {/* second section && bottom section of course where catogray and course name are defined*/}
      <div className="bg-lightgray pt-3 pb-6 px-3 rounded-lg space-y-4">
        {/* darken background heading  and time to complete the course */}
        <div className="flex items-center justify-between">
          <div className="bg-[#0c0c0c90] px-1 py-1 rounded-md">
            <Paragraph color="white" fontSize="medium">
              {category}
            </Paragraph>
          </div>
          <div className="bg-[#0c0c0c90] px-1 py-1 rounded-md flex items-center justify-center gap-x-2">
            <FaClock color="white" />
            <Paragraph color="white" fontSize="medium">
              {time}
            </Paragraph>
          </div>
        </div>

        {/* course name */}
        <HeaderMedium color="white" fontSize="18">
          {heading}
        </HeaderMedium>
      </div>
    </div>
  );
}

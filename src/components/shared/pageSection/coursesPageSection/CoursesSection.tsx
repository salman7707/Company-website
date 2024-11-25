"use client"
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeaderMedium from "@/components/template/headings/HeaderMedium";
import Paragraph from "@/components/template/headings/Paragraph";
import { FaClock } from "react-icons/fa6";
import CoursesData from "@/lib/Courses";

export default function CoursesSection() {
  return (
    <div className={` w-full max-w-[1220px] mx-auto py-10 `}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:px-0 px-6 md:gap-6 gap-8">
        {/* Cards */}
        {CoursesData.map((data) => (
          <div key={data.id} className="w-full h-full md:space-y-2 space-y-3">
            {/* IMG Section */}
            <div className="relative w-auto h-auto scale-100 hover:scale-105 transition-all duration-200 ease-in shadow-lg shadow-black rounded-lg">
              <Image
                src={ data.src ||IMAGES.COURSE1}
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
                    {data.category}
                  </Paragraph>
                </div>
                <div className="bg-[#0c0c0c90] px-1 py-1 rounded-md flex items-center justify-center gap-x-2">
                  <FaClock color="white" />
                  <Paragraph color="white" fontSize="medium">
                    {data.time}
                  </Paragraph>
                </div>
              </div>

              {/* course name */}
              <HeaderMedium color="white" fontSize="18">
                {data.heading}
              </HeaderMedium>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

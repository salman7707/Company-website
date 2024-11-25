"use client";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function CoursesHeadingSection() {
  const { theme } = useMyContext();
  return (
    <div className="relative w-full max-w-[1210px] mx-auto md:px-28 px-4 pt-44 pb-10">
      <div className="space-y-4">
        <HeaderLarge
          color={theme === "light" ? "black" : "white"}
          fontSize="64"
          mdScreenFont="48"
          smallScreenFont="46"
          textAlign="text-center"
          fontFamily="font-custom"
          weight="medium"
        >
          Course Catalog
        </HeaderLarge>
        <div className="max-w-full md:w-[25%] w-[60%] mx-auto flex items-center justify-center gap-x-0">
          <div className="border-b-4 rounded-3xl border-primary w-[1.5%] mx-auto"></div>
          <div className="border-b-4 rounded-3xl border-primary w-[5%] mx-auto"></div>
          <div className="border-b-4 rounded-3xl border-primary w-[70%] mx-auto"></div>
          <div className="border-b-4 rounded-3xl border-primary w-[5%] mx-auto"></div>
          <div className="border-b-4 rounded-3xl border-primary w-[1.5%] mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

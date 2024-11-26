"use client";
import React from "react";
import HeaderMedium from "../headings/HeaderMedium";
import { useMyContext } from "@/contexts/MyContexts";
import { GoArrowUpRight } from "react-icons/go";
import { ProjectCardType } from "@/components/shared/types/templeteTypes/ProjectCard";
import Image from "next/image";

export default function ProjectCard({
  img,
  smallHeading,
  heading,
}: ProjectCardType) {
  const { theme } = useMyContext();
  return (
    <div
      className={` border ${
        theme === "light"
          ? "border-slate-200  drop-shadow-2xl shadow-slate-300"
          : "border-transparent"
      }   w-full group h-[450px]  relative overflow-hidden z-0 rounded-md`}
    >
      <div className="absolute z-10 bg-gradient-to-b from-primary to-primary transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-[30%] top-0 left-0 h-full w-full"></div>
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="project1"
        className="block z-0"
      />
      <div className="absolute bottom-0 translate-y-40 opacity-0 group-hover:translate-y-0 z-10 group-hover:opacity-100 transition-all duration-700 ease-in-out w-full text-white bg-black px-3 py-6 space-y-4 border-b-2 border-b-primary flex items-center justify-between">
        <div className="space-y-3">
          <HeaderMedium color="primary" fontSize="20">
            {smallHeading}
          </HeaderMedium>
          <HeaderMedium color="white" fontSize="28" smallScreenFont="24">
            {heading}
          </HeaderMedium>
        </div>
        <div className="flex items-center justify-center bg-primary w-16 h-16 translate-x-20 group-hover:translate-x-0 transition-transform duration-700 ease-linear">
          <GoArrowUpRight color="white" className="text-4xl font-extrabold" />
        </div>
      </div>
    </div>
  );
}

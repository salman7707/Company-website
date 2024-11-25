"use client"
import CoursesSection from "@/components/shared/pageSection/coursesPageSection/CoursesSection";
import CoursesHeadingSection from "@/components/shared/pageSection/coursesPageSection/Heading";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function Courses() {
  const { theme } = useMyContext();
  return (
    <div className={` ${theme === "light" ? "bg-white" : "bg-black"} `}>
      <CoursesHeadingSection />
      <CoursesSection/>
    </div>
  );
}

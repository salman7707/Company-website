"use client";
import React from "react";
import CoursesData from "@/lib/Courses";
import CoursesCard from "@/components/template/cards/CoursesCard";

export default function CoursesSection() {
  return (
    <div className={` w-full max-w-[1220px] mx-auto py-10 `}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:px-0 px-6 md:gap-6 gap-8">
        {/* Cards */}
        {CoursesData.map((data) => (
          <div key={data.id}>
            <CoursesCard
              src={data.src}
              category={data.category}
              time={data.time}
              heading={data.heading}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

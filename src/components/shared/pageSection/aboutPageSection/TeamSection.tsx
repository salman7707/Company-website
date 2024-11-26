"use Client";
import TeamCard from "@/components/template/cards/TeamCard";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import { useMyContext } from "@/contexts/MyContexts";
import TeamData from "@/lib/TeamData";
import React from "react";

export default function TeamSection() {
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto">
      <div className="w-full flex flex-col items-center justify-between">
        {/* Heading Section */}
        <div className="space-y-3">
          <HeadingMedium color="primary" fontSize="20" textAlign="center">
            Our Team
          </HeadingMedium>
          <HeadingLarge
            color={theme === "light" ? "black" : "white"}
            fontSize="48"
            smallScreenFont="36"
          >
            Meet Our Experts
          </HeadingLarge>
        </div>
        <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center xl:gap-4 md:gap-3 gap-5 md:px-5 px-2">
          {TeamData.map((data) => (
            <div key={data.id}>
              <TeamCard name={data.name} role={data.role} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

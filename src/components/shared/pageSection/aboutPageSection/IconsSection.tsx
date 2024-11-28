import HeadingMedium from "@/components/template/headings/HeaderMedium";
import { useMyContext } from "@/contexts/MyContexts";
import AboutUs from "@/lib/AboutIcons";
import Image from "next/image";
import React from "react";

export default function IconsSection() {
  const {theme} = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto py-20">
      <div className="grid lg:grid-cols-3 grid-cols-2 w-[80%] mx-auto lg:gap-y-28 gap-x-14 gap-y-16">
        {AboutUs.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center space-y-5"
          >
            <Image
              src={data.src}
              alt={"icons"}
              width={101}
              height={101}
              className=""
              style={{
                filter: theme === "dark" ? "invert(1)" : "invert(0)",
                transition: "filter 0.3s ease",
              }}
            />
            <HeadingMedium
              color={ theme=== "light" ?"black":"white" }
              fontFamily="font-custom"
              weight="medium"
              textAlign="center"
            >
              {data.heading}
            </HeadingMedium>
          </div>
        ))}
      </div>
    </div>
  );
}

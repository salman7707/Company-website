import HeadingMedium from "@/components/template/headings/HeaderMedium";
import AboutUs from "@/lib/AboutIcons";
import Image from "next/image";
import React from "react";

export default function IconsSection() {
  return (
    <div className="w-full max-w-[1210px] mx-auto py-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 w-[80%] mx-auto gap-y-28">
        {AboutUs.map((data) => (
          <div key={data.id} className="flex flex-col items-center justify-center space-y-5">
            <Image src={data.src} alt={"icons"} width={101} height={101} />
            <HeadingMedium color="black" fontFamily="font-custom" weight="medium" >{data.heading}</HeadingMedium>
          </div>
        ))}
      </div>
    </div>
  );
}

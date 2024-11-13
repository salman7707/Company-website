import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";

export default function ServicesSection() {
  return (
    <div className="flex relative items-center justify-center pt-10 md:pb-4 pb-28 w-full max-w-[1210px] mx-auto">
      <div className=" relative z-10 ">
        <div className="md:scale-100 scale-[2.5]">
          <Image
            src={IMAGES.mainImg}
            layout="responsive"
            alt="main"
            width={900}
            height={600}
            className="object-cover"
          />
        </div>

        <div className="absolute xl:top-72 lg:top-64 md:top-44 top-14 left-0 right-0 flex items-center justify-center">
          <Image
            src={IMAGES.NETIXSOL}
            alt="Netixsol"
            width={290}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";

export default function ServicesSection() {
  return (
    <div className="flex relative items-center justify-center pt-10 pb-4 w-full max-w-[1210px] mx-auto">
      <div className=" relative z-10">
        <Image src={IMAGES.mainImg} alt="main" width={900} height={600} />
        <div className="absolute top-56 left-[34%]">
          <Image
            src={IMAGES.NETIXSOL}
            alt="Netixsol"
            width={290}
            height={300}
          />
        </div>
      </div>
      
    </div>
  );
}

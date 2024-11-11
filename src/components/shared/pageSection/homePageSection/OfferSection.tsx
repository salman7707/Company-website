import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeadingMedium from "@/components/template/Header/HeadingMedium";
import HeadingLarge from "@/components/template/Header/HeadingLarge";

export default function OfferSection() {
  return (
    <div className="w-full max-w-[1210px] py-28 mx-auto flex items-center justify-center">
      <div className="w-full">
        <Image src={IMAGES.OFFER} alt="Offer" width={578} height={518} />
      </div>
      <div className="w-full">
        <HeadingMedium fontSize="20" weight="medium" color="secondary">
          WHAT WE OFFER
        </HeadingMedium>
        <HeadingLarge fontSize="40" color="black">
          End-to-End Blockchain development that makes sense
        </HeadingLarge>
      </div>
    </div>
  );
}

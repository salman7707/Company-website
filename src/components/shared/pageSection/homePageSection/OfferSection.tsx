"use Client";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Button from "@/components/template/button/Button";
import { useMyContext } from "@/contexts/MyContexts";
import OfferButton from "@/lib/OfferBtn";

export default function OfferSection() {
  const { theme } = useMyContext();
  return (
    <div className="xl:w-full lg:w-[90%] w-[95%] z-10 relative max-w-[1210px] py-28 mx-auto lg:space-y-0 space-y-3 flex lg:flex-row xs:flex-col xl:items-end items-center justify-center lg:space-x-3 md:px-0  px-5">
      <div className="lg:w-[50%] w-full flex items-center">
        <Image src={IMAGES.OFFER} alt="Offer" width={578} height={518} />
      </div>
      <div className="lg:w-[50%] space-y-5 flex flex-col items-start justify-between">
        <HeadingMedium
          fontSize="20"
          weight="medium"
          color={theme === "light" ? "secondary" : "primary"}
        >
          WHAT WE OFFER
        </HeadingMedium>
        <HeadingLarge
          fontSize="40"
          color={theme === "light" ? "black" : "white"}
          leading="custom"
          fontFamily="font-custom"
          weight="medium"
          smallScreenFont="30"
        >
          End-to-End Blockchain development that makes sense
        </HeadingLarge>
        <Paragraph
          fontSize="large"
          fontFamily="font-manrope"
          color={theme === "light" ? "black" : "white"}
          weight="normal"
        >
          From whiteboard to market, we assist mid-sized enterprises and funded
          startups to scope, build and enhance digital products and services. We
          blend research with profound engineering expertise for smooth
          end-to-end delivery. This approach helps businesses accelerate time to
          market and increase customer satisfaction and profits.
        </Paragraph>
        <div className="md:block hidden space-y-4 items-start">
          <div className="flex flex-wrap items-center gap-4 lg:pr-2 pr-4">
            {OfferButton.map((data) => (
              <div key={data.id} className="">
                <Button
                  className=" flex items-center justify-center"
                  fontSize="large"
                  fontFamily="font-custom"
                  bgColor={theme === "light" ? "black" : "white"}
                  color={theme === "light" ? "white" : "black"}
                  border={theme === "light" ? "black" : "white"}
                  hoverBg={theme === "light" ? "white" : "black"}
                  hoverText={theme === "light" ? "black" : "white"}
                  rounded="normal"
                  size="extralarge"
                >
                  {data.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import ServicesCard from "@/components/template/cards/Card";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import FocusData from "@/lib/FocusData";

export default function FocusSection() {
  return (
    <div className="relative">
      <div className="relative pt-20 md:pb-10 xs:pb-24 z-10 xl:w-full w-[90%] mx-auto max-w-[1210px]">
        <div className="flex flex-col items-center justify-center space-y-3">
          <HeadingLarge
            fontSize="regular"
            color="white"
            mdScreenFont="48"
            smallScreenFont="36"
            fontFamily="font-custom"
            weight="medium"
          >
            Focus Industries
          </HeadingLarge>
          <Paragraph fontSize="large" color="white" textAlign="text-center">
            NetixSol specializes in assembling talented blockchain development
            teams for <br /> clients in the following sectors:
          </Paragraph>
        </div>
        <div className="py-14 grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
          {FocusData.map((data) => (
            <div key={data.id}>
              <ServicesCard
                theme={"light"}
                img={data.img}
                paragraph={data.paragraph}
                heading={data.heading}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/serviceBg.png')",
        }}
        className="absolute top-0 bottom-0 left-0 z-0 w-full h-full bg-center bg-cover"
      ></div>
    </div>
  );
}

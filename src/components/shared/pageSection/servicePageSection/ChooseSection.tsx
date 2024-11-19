import SmallCard from "@/components/template/cards/SmallCard";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import ChooseUs from "@/lib/ChooseUs";

export default function ChooseSection() {
  return (
    <div className="w-full max-w-[1210px] mx-auto">
      <div className="flex flex-col items-center justify-center space-y-2 py-20">
        <HeaderLarge
          color="black"
          fontSize="48"
          fontFamily="font-custom"
          weight="medium"
        >
          Why Choose US ?
        </HeaderLarge>
        <Paragraph fontSize="large" color="black">
          We tend to provide the best services in order to build long term
          relationships with our clients
        </Paragraph>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {ChooseUs.map((data) => (
          <div className="" key={data.id}>
            <SmallCard img={data.src} heading={data.heading} />
          </div>
        ))}
      </div>
    </div>
  );
}

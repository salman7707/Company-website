import SmallCard from "@/components/template/cards/SmallCard";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import ChooseUs from "@/lib/ChooseUs";
import { useMyContext } from "@/contexts/MyContexts";

export default function ChooseSection() {
  const {theme} = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto">
      <div className="flex flex-col items-center justify-center px-4 space-y-2 pt-20 pb-10 w-full">
        <HeaderLarge
          color={theme === "light" ?"black" : "white"}
          fontSize="48"
          smallScreenFont="36"
          fontFamily="font-custom"
          weight="medium"
          textAlign="text-center"
        >
          Why Choose US ?
        </HeaderLarge>
        <Paragraph fontSize="large" color={theme === "light" ?"black" : "white"} textAlign="text-center">
          We tend to provide the best services in order to build long term
          relationships with our clients
        </Paragraph>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-y-8 gap-y-6 lg:w-full md:w-[80%] w-full mx-auto justify-items-center justify-center xl:px-0 lg:px-8 ">
        {ChooseUs.map((data) => (
          <div className="" key={data.id}>
            <SmallCard img={data.src} heading={data.heading} />
          </div>
        ))}
      </div>
    </div>
  );
}

import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import { useMyContext } from "@/contexts/MyContexts";
import Paragraph from "@/components/template/headings/Paragraph";
import HowToApply from "@/lib/HowToApply";

export default function ApplySection() {
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto py-10">
      <div className="w-full">
        <HeaderLarge
          fontSize="40"
          smallScreenFont="36"
          color={theme === "light" ? "black" : "white"}
        >
          <div className="flex items-center justify-center gap-x-4">
            <Image
              src={IMAGES.APPLY}
              width={45}
              height={50}
              alt={"apply"}
              style={{
                filter: theme === "dark" ? "invert(0)" : "invert(1)",
                transition: "filter 0.3s ease",
              }}
            />

            How to Apply
          </div>
        </HeaderLarge>
      </div>
      <div className="py-8 flex lg:flex-row flex-col justify-center gap-y-10 items-center gap-x-8 lg:pb-60 pb-6 w-[95%] mx-auto">
        {HowToApply.map((data,index) => (
          <div
            key={data.id}
            className={`flex relative flex-col items-center justify-center gap-y-10 w-full ${ index == 0 ? "lg:translate-y-0" : index===1 ? "lg:translate-y-32" :  index === 2  ? "lg:translate-y-60" :""} `}
          >
            <div className="w-[60px] relative h-[60px] bg-primary rounded-full text-3xl font-custom font-medium text-white flex items-center justify-center ">
              0{data.id}
            </div>
            <div className="lg:flex  hidden absolute top-6 -right-6">
              {data.arrow && (
                <Image src={IMAGES.ARROW} alt="sec" width={160} height={160} />
              )}
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-4 lg:gap-y-0 gap-y-4">
              <div>
                <Image
                  src={data.src || IMAGES.FIRSTSEC}
                  alt="sec"
                  width={120}
                  height={120}
                />
              </div>
              <div className="space-y-1 px-2">
                <HeaderLarge
                  fontSize="35"
                  weight="semibold"
                  smallScreenFont="30"
                  fontFamily="font-custom"
                  color="primary"
                  textAlign="text-center"
                >
                  {data.heading}
                </HeaderLarge>
                <Paragraph
                  fontSize="small"
                  textAlign="text-center"
                  color={theme === "light" ? "black" : "white"}
                >
                  {data.subheading}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

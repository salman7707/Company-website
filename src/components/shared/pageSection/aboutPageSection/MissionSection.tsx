import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";

export default function MissionSection() {
  return (
    <div className="relative py-10 w-full max-w-[1210px] mx-auto px-3">
      <HeaderLarge
        color="black"
        fontSize="48"
        mdScreenFont="48"
        smallScreenFont="36"
        textAlign="text-center"
        fontFamily="font-custom"
        weight="medium"
      >
        Mission
      </HeaderLarge>
      <Paragraph color="black" fontSize="extralarge" textAlign="text-center">
        {" "}
        Empowering a Decentralized Future with Blockchain Solutions
      </Paragraph>
    </div>
  );
}

import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function MissionSection() {
  const { theme } = useMyContext();
  return (
    <div className="relative py-10 w-full max-w-[1210px] mx-auto px-3">
      <HeaderLarge
        color={theme === "light" ? "black" : "white"}
        fontSize="48"
        mdScreenFont="48"
        smallScreenFont="36"
        textAlign="text-center"
        fontFamily="font-custom"
        weight="medium"
      >
        Mission
      </HeaderLarge>
      <Paragraph
        color={theme === "light" ? "black" : "white"}
        fontSize="extralarge"
        textAlign="text-center"
      >
        {" "}
        Empowering a Decentralized Future with Blockchain Solutions
      </Paragraph>
    </div>
  );
}

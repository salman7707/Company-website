import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { useMyContext } from "@/contexts/MyContexts";

export default function CeoSection() {
  const {theme} = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto py-4 px-4">
      <div className="space-y-8">
        <HeaderLarge fontSize="48" fontFamily="font-custom" weight="medium" color={ theme=== "light" ? "black" : "white"} textAlign="text-center"
        smallScreenFont="36" mdScreenFont="48">
          Get to know <span className="text-primary">CEO</span>
        </HeaderLarge>
        <div className={` ${ theme === "light" ? "bg-secondarygray" : "bg-lightblack" }  space-y-4 rounded-3xl lg:w-[40%] md:w-[60%] mx-auto px-6 py-8`}>
          <HeaderLarge color="primary" fontSize="40" smallScreenFont="36" mdScreenFont="40">
            Salman
          </HeaderLarge>
          <Paragraph color={theme === "light" ? "black" : "white"} fontSize="large">
            CEO XYZ Pvt. LTD | Founder WEB5
          </Paragraph>
          <Paragraph color={theme === "light" ? "black" : "white"} fontSize="large">
            Technology entrepreneur with years of experience in augmented
            reality, virtual reality, blockchain development, artificial
          </Paragraph>
          <div className={`flex space-x-6 ${theme === "light" ?"text-black":"text-white"}`}>
            <FaLinkedin className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <BiMobile className="text-3xl" />
            <FaEnvelope className="text-3xl" />
            <FaTelegram className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

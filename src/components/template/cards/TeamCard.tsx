import Image from "next/image";
import React, { useState } from "react";
import { IMAGES } from "../../../../public/images";
import HeadingMedium from "../headings/HeaderMedium";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TeamCardType } from "@/components/shared/types/templeteTypes/TeamCard";

export default function TeamCard({name,role}:TeamCardType) {
    const [color,setColor] = useState(false);
  return (
    <div onMouseEnter={()=>setColor(!color)} onMouseLeave={()=>setColor(!color)} className="w-full h-full group relative transition-all duration-500 ease-linear bg-black rounded-2xl shadow-custom-inner shadow-lightblack hover:bg-gradient-to-r hover:to-primary hover:from-[#0D0C17]">
      <div className="h-[460px] px-6 w-full overflow-hidden">
        {/* Img Section */}
        <div className="flex items-center justify-center pt-8 pb-6 md:px-10 xss:px-10 xs:px-0 w-full">
          <div className="flex items-center justify-center xl:w-[250px] xs:w-[90%] h-[250px] group-hover:xl:w-[215px] group-hover:w-[90%] group-hover:h-[215px] group-hover:rounded-full group-hover:bg-lightblack transition-all duration-500 ease-in-out ">
            <Image
              alt="person"
              src={IMAGES.DUMMY}
              width={400}
              height={200}
              className="w-[350px] h-[270px] group-hover:w-[250px] group-hover:h-[230px] transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
        {/* Heading Section */}
        <div className="py-4 space-y-3">
          <HeadingMedium color="white" smallScreenFont="30" fontSize="28" textAlign="center">
            {name}
          </HeadingMedium>
          <HeadingMedium color={color === true?"white":"primary"} fontSize="18" textAlign="center">
            {role}
          </HeadingMedium>
        </div>
        {/* icons  */}
        <div className="opacity-0 group-hover:opacity-100 flex text-gray justify-between w-[80%] mx-auto translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <div className="border px-3 py-3 rounded-full border-white">
            <FaInstagram className="text-2xl" />
          </div>
          <div className="border px-3 py-3 rounded-full border-white">
            <FaLinkedinIn className="text-2xl" />
          </div>
          <div className="border px-3 py-3 rounded-full border-white">
            <FaFacebook className="text-2xl" />
          </div>
          <div className="border px-3 py-3 rounded-full border-white">
            <FaYoutube className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

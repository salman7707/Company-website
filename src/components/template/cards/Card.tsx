import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/images";
import HeaderMedium from "../headings/HeaderMedium";
import Button from "../button/Button";
import Paragraph from "../headings/Paragraph";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface cardInter {
  img?: string;
  heading?: string;
  paragraph?: string;
  theme?: "dark" | "light";
  btn?: boolean;
}

export default function Card({
  img,
  btn,
  heading,
  paragraph,
  theme = "dark",
}: cardInter) {
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-black group transition duration-300 rounded-3xl border-2 border-black hover:shadow-md hover:shadow-primary hover:border-white "
          : "bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] hover:bg-gradient-to-l hover:from-black hover:to-black group transition duration-300 rounded-2xl border-2 border-black hover:shadow-md hover:shadow-primary hover:border-white "
      }  w-full h-full`}
    >
      <div
        className={`flex flex-col ${
          theme === "dark"
            ? "justify-between space-y-5 px-4 py-4"
            : "justify-start space-y-6 py-7 px-5"
        }  h-full items-start  `}
      >
        <Image
          src={img || IMAGES.NFT}
          alt="nft"
          width={`${theme === "dark" ? 70 : 65}`}
          height={`${theme === "dark" ? 50 : 45}`}
        />
        <HeaderMedium
          fontSize="26"
          fontFamily="font-custom"
          weight="medium"
          color="white"
          smallScreenFont="24"
        >
          {heading}
        </HeaderMedium>
        <Paragraph
          color={theme === "dark" ? "gray" : "white"}
          fontSize={theme === "dark" ? "medium" : "large"}
          weight="normal"
          fontFamily="font-manrope"
        >
          {paragraph}
        </Paragraph>
        {btn && (
          <Button
            color="primary"
            hoverBg="primary"
            hoverText="white"
            className="group-hover:bg-primary group-hover:text-white transition duration-300"
          >
            <div className="flex items-center relative pr-4">
              Learn More
              <MdOutlineKeyboardArrowRight className="hidden absolute group-hover:text-white group-hover:block text-4xl -top-1 -right-3 font-light" />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}

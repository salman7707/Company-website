import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../public/images";
import HeaderMedium from "../headings/HeaderMedium";
import Button from "../button/Button";
import Paragraph from "../headings/Paragraph";

interface cardInter {
  img?: string;
  heading?: string;
  paragraph?: string;
}

export default function Card({ img, heading, paragraph }: cardInter) {
  return (
    <div className="bg-black group transition duration-300 rounded-3xl border-2 border-black hover:shadow-md hover:shadow-primary hover:border-white w-[370px] h-[300px]">
      <div className="flex flex-col justify-between h-full items-start px-4 py-4 ">
        <Image src={img || IMAGES.NFT } alt="nft" width={70} height={50} />
        <HeaderMedium
          fontSize="26"
          fontFamily="font-custom"
          weight="medium"
          color="white"
        >
          {heading}
        </HeaderMedium>
        <Paragraph
          color="gray"
          fontSize="medium"
          weight="normal"
          fontFamily="font-manrope"
        >
          {paragraph}
        </Paragraph>
        <Button
          color="primary"
          hoverBg="primary"
          hoverText="white"
          className="group-hover:bg-primary group-hover:text-white transition duration-300"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

"use Client";
import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Button from "@/components/template/button/Button";
import { useMyContext } from "@/contexts/MyContexts";

export default function OfferSection() {
  const { theme } = useMyContext();
  return (
    <div className="xl:w-full lg:w-[90%] w-[96%] z-10 relative max-w-[1210px] py-28 mx-auto lg:space-y-0 space-y-3 flex lg:flex-row xs:flex-col xl:items-end items-center justify-center lg:space-x-3">
      <div className="w-full flex items-center">
        <Image src={IMAGES.OFFER} alt="Offer" width={578} height={518} />
      </div>
      <div className="w-full space-y-5 flex flex-col items-start justify-between">
        <HeadingMedium
          fontSize="20"
          weight="medium"
          color={theme === "light" ? "secondary" : "primary"}
        >
          WHAT WE OFFER
        </HeadingMedium>
        <HeadingLarge
          fontSize="40"
          color={theme === "light" ? "black" : "white"}
          leading="custom"
          fontFamily="font-custom"
          weight="medium"
          smallScreenFont="30"
        >
          End-to-End Blockchain development that makes sense
        </HeadingLarge>
        <Paragraph
          fontSize="large"
          fontFamily="font-manrope"
          color={theme === "light" ? "black" : "white"}
          weight="normal"
        >
          From whiteboard to market, we assist mid-sized enterprises and funded
          startups to scope, build and enhance digital products and services. We
          blend research with profound engineering expertise for smooth
          end-to-end delivery. This approach helps businesses accelerate time to
          market and increase customer satisfaction and profits.
        </Paragraph>
        <div className="md:block hidden space-y-4">
          <div className="flex xl:flex-row xs:flex-col justify-start xl:space-x-4 space-x-0 xl:space-y-0 space-y-4">
            <div className="flex space-x-4 justify-start">
              <Button
                bgColor={theme === "light" ? "black" : "white"}
                color={theme === "light" ? "white" : "black"}
                border={theme === "light" ? "black" : "white"}
                hoverBg={theme === "light" ? "white" : "black"}
                hoverText={theme === "light" ? "black" : "white"}
                rounded="normal"
                size="large"
              >
                Dapp
              </Button>
              <Button
                bgColor={theme === "light" ? "black" : "white"}
                color={theme === "light" ? "white" : "black"}
                border={theme === "light" ? "black" : "white"}
                hoverBg={theme === "light" ? "white" : "black"}
                hoverText={theme === "light" ? "black" : "white"}
                size="extralarge"
                rounded="normal"
              >
                DEX Development
              </Button>
            </div>
            <div>
              <Button
                bgColor={theme === "light" ? "black" : "white"}
                color={theme === "light" ? "white" : "black"}
                border={theme === "light" ? "black" : "white"}
                hoverBg={theme === "light" ? "white" : "black"}
                hoverText={theme === "light" ? "black" : "white"}
                size="extralarge"
                rounded="normal"
              >
                DEFI Development
              </Button>
            </div>
          </div>
          <div className="flex justify-start space-x-4">
            <Button
              bgColor={theme === "light" ? "black" : "white"}
              color={theme === "light" ? "white" : "black"}
              border={theme === "light" ? "black" : "white"}
              hoverBg={theme === "light" ? "white" : "black"}
              hoverText={theme === "light" ? "black" : "white"}
              rounded="normal"
              size="extralarge"
            >
              Tokenization
            </Button>
            <Button
              bgColor={theme === "light" ? "black" : "white"}
              color={theme === "light" ? "white" : "black"}
              border={theme === "light" ? "black" : "white"}
              hoverBg={theme === "light" ? "white" : "black"}
              hoverText={theme === "light" ? "black" : "white"}
              size="extralarge"
              rounded="normal"
            >
              Staking & Farming
            </Button>
          </div>
          <div className="flex justify-start space-x-4">
            <Button
              bgColor={theme === "light" ? "black" : "white"}
              color={theme === "light" ? "white" : "black"}
              border={theme === "light" ? "black" : "white"}
              hoverBg={theme === "light" ? "white" : "black"}
              hoverText={theme === "light" ? "black" : "white"}
              rounded="normal"
              size="extralarge"
            >
              NFT Development
            </Button>
            <Button
              bgColor={ theme === "light" ? "black": "white" }
              color={ theme === "light" ? "white": "black" }
              border={ theme === "light" ? "black": "white" } 
              hoverBg={ theme === "light" ? "white" : "black" }
              hoverText={ theme === "light" ? "black" : "white" }
              rounded="normal"
              size="extralarge"
            >
              Smart Contract
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

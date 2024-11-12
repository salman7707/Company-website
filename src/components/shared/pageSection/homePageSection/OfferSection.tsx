import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../../../public/images";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Button from "@/components/template/button/Button";

export default function OfferSection() {
  return (
    <div className="w-full z-10 relative max-w-[1210px] py-28 mx-auto flex items-end justify-center">
      <div className="w-full">
        <Image src={IMAGES.OFFER} alt="Offer" width={578} height={518} />
      </div>
      <div className="w-full space-y-5 flex flex-col items-start justify-between">
        <HeadingMedium fontSize="20" weight="medium" color="secondary">
          WHAT WE OFFER
        </HeadingMedium>
        <HeadingLarge fontSize="40" color="black" leading="custom">
          End-to-End Blockchain development that makes sense
        </HeadingLarge>
        <Paragraph
          fontSize="large"
          fontFamily="font-manrope"
          color="black"
          weight="normal"
        >
          From whiteboard to market, we assist mid-sized enterprises and funded
          startups to scope, build and enhance digital products and services. We
          blend research with profound engineering expertise for smooth
          end-to-end delivery. This approach helps businesses accelerate time to
          market and increase customer satisfaction and profits.
        </Paragraph>
        <div className="space-y-4">
          <div className="flex justify-start space-x-4">
            <Button
              bgColor="black"
              color="white"
              border="black"
              hoverBg="white"
              hoverText="black"
              rounded="normal"
              size="large"
            >
              Dapp
            </Button>
            <Button
              bgColor="black"
              color="white"
              border="black"
              rounded="normal"
              size="extralarge"
              hoverBg="white"
              hoverText="black"
            >
              DEX Development
            </Button>
            <Button
              bgColor="black"
              border="black"
              color="white"
              rounded="normal"
              size="extralarge"
              hoverBg="white"
              hoverText="black"
            >
              DEFI Development
            </Button>
          </div>
          <div className="flex justify-start space-x-4">
            <Button
              bgColor="black"
              color="white"
              border="black"
              rounded="normal"
              size="extralarge"
              hoverBg="white"
              hoverText="black"
            >
              Tokenization
            </Button>
            <Button
              bgColor="black"
              border="black"
              color="white"
              rounded="normal"
              size="extralarge"
              hoverBg="white"
              hoverText="black"
            >
              Staking & Farming
            </Button>
          </div>
          <div className="flex justify-start space-x-4">
            <Button
              bgColor="black"
              color="white"
              border="black"
              rounded="normal"
              size="extralarge"
              hoverBg="white"
              hoverText="black"
            >
              NFT Development
            </Button>
            <Button
              bgColor="black"
              color="white"
              rounded="normal"
              border="black"
              hoverBg="white"
              hoverText="black"
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

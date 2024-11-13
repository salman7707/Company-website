import ServicesCard from "@/components/template/cards/ServicesCard";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import HeadingMedium from "@/components/template/headings/HeaderMedium";
import Paragraph from "@/components/template/headings/Paragraph";
import React from "react";
import { IMAGES } from "../../../../../public/images/index";
import Button from "@/components/template/button/Button";
import { IoIosArrowDown } from "react-icons/io";

export default function ServiceSectionMain() {
  return (
    <div className="relative">
      <div className="relative pt-32 md:pb-10 xs:pb-24 z-10 xl:w-full w-[90%] mx-auto max-w-[1210px]">
        <div className="flex flex-col items-center justify-center space-y-3">
          <HeadingMedium color="primary" >Leading The Way</HeadingMedium>
          <HeadingLarge
            fontSize="regular"
            color="white"

            mdScreenFont="64"
            smallScreenFont="36"
            fontFamily="font-custom"
            weight="medium"
          >
            Our Services
          </HeadingLarge>
          <Paragraph fontSize="extralarge" textAlign="text-center">
            We make it easy to begin your Web3 journey and there’s a place for
            <br />
            everyone. Just take your pick and get started.
          </Paragraph>
        </div>
        <div className="py-14 grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
          <ServicesCard
            img={IMAGES.NFT}
            paragraph="We develop robust NFT marketplace platforms with multiple security layers."
            heading="NFT Development"
          />
          <ServicesCard
            img={IMAGES.AUDIT}
            paragraph="Smart contract services provide secure execution of digital contracts on platforms"
            heading="Smart Contracts"
          />
          <ServicesCard
            img={IMAGES.CARDPIX}
            paragraph="Financial services, such as lending, borrowing, and trading,"
            heading="Decentralized Finance"
          />

          <ServicesCard
            img={IMAGES.CARDPIX}
            paragraph="Software application that operates on a decentralized network like ensuring secure"
            heading="Decentralized Apps"
          />
          <ServicesCard
            img={IMAGES.DEX}
            paragraph="Users can trade cryptocurrencies directly with one another"
            heading="Decentralized Exchange"
          />
          <ServicesCard
            img={IMAGES.DOLL}
            paragraph="Enabling users to store, manage, and trade various cryptocurrencies within platform."
            heading="Exchange & Wallet"
          />
        </div>
        <div className="flex items-center justify-center relative z-10">
          <Button bgColor="primary" size="extralarge" hoverBg="secondaryPurple">
            <div className="flex items-center justify-between">
              See More <IoIosArrowDown className="text-2xl" />
            </div>
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/serviceBg.png')",
        }}
        className="absolute top-0 bottom-0 left-0 z-0 w-full h-full bg-cover bg-no-repeat"
      ></div>
    </div>
  );
}

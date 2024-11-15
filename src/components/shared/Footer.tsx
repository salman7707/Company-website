import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../public/images";
import Paragraph from "../template/headings/Paragraph";
import HeadingMedium from "../template/headings/HeaderMedium";
import FooterInput from "../template/form/input/FooterInput";
import { FaArrowRight } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import Button from "../template/button/Button";

export default function Footer() {
  return (
    <div className="relative bg-white pt-40 pb-20">
      <div className="w-[93%] relative z-10 flex flex-col py-6 px-6 rounded-3xl max-w-[1300px] mx-auto bg-black h-auto">
        <div className="flex justify-between items-start w-full">
          <div className="space-y-6 w-[26%]">
            <Image
              src={IMAGES.FLOGO}
              width={165}
              height={55}
              alt="LOGO"
              className=" "
            />
            <Paragraph color="gray">
              © 2024 NetixSol Inc. All rights reserved.
            </Paragraph>
            <HeadingMedium
              color="white"
              weight="normal"
              fontFamily="font-manrope"
            >
              Subscribe Now
            </HeadingMedium>
            <div>
              <div className="flex items-center justify-between">
                <FooterInput type="text" placeholder="Email Address" />
                <FaArrowRight color="white" />
              </div>
              <div className="border-b-2 border-white w-full"></div>
            </div>
          </div>
          <div className=" flex pt-4 flex-col justify-end items-end w-[23%]">
            <div className="w-[53%] space-y-7">
              <div>
                <HeadingMedium
                  color="white"
                  fontSize="20"
                  textAlign="left"
                  weight="normal"
                >
                  Services
                </HeadingMedium>
              </div>

              <div className="space-y-3">
                <HeadingMedium color="gray" fontSize="16">
                  Tokenization
                </HeadingMedium>
                <HeadingMedium color="gray" fontSize="16">
                  DEX Development
                </HeadingMedium>
                <HeadingMedium color="gray" fontSize="16">
                  DEFI Development
                </HeadingMedium>
                <HeadingMedium color="gray" fontSize="16">
                  NFT Development
                </HeadingMedium>
              </div>
            </div>
          </div>
          <div className="flex space-y-7 pt-4 flex-col justify-start items-start w-[10%]">
            <div>
              <HeadingMedium color="white" fontSize="20" weight="normal">
                Industries
              </HeadingMedium>
            </div>

            <div className="space-y-3">
              <HeadingMedium color="gray" fontSize="16">
                Remittance
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                Cryptocurrencies
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                DAO
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                Supply Chain
              </HeadingMedium>
            </div>
          </div>
          <div className="flex space-y-7 pt-4 flex-col justify-end items-start w-[13%]">
            <div>
              <HeadingMedium color="white" fontSize="20" weight="normal">
                Discover
              </HeadingMedium>
            </div>

            <div className="space-y-3">
              <HeadingMedium color="gray" fontSize="16">
                Courses
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                Case Studies
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                Events
              </HeadingMedium>
              <HeadingMedium color="gray" fontSize="16">
                Podcast & Webinars
              </HeadingMedium>
            </div>
          </div>
          <div className="flex space-y-7 pt-4 flex-col justify-start items-start w-[13%]">
            <div>
              <HeadingMedium color="white" fontSize="20" weight="normal">
                Our Company
              </HeadingMedium>
            </div>

            <div className="space-y-3">
              <HeadingMedium color="gray" fontSize="16">
                About Us
              </HeadingMedium>
              <div className="flex items-center space-x-3">
                <HeadingMedium color="gray" fontSize="16">
                  Careers
                </HeadingMedium>
                <Button
                  rounded="normal"
                  color="white"
                  size="extrasmall"
                  bgColor="green"
                  fontSize="small"
                >
                  Hiring
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-dotted border-gray pt-6 w-full"></div>
        <div className="w-full flex items-center justify-between ">
          <div className="w-[25%] flex pt-4 justify-between">
            <HeadingMedium
              color="gray"
              fontSize="18"
              fontFamily="font-custom"
              weight="medium"
            >
              Privacy Policy
            </HeadingMedium>
            <HeadingMedium
              fontFamily="font-custom"
              weight="medium"
              color="gray"
              fontSize="18"
            >
              Terms of Service
            </HeadingMedium>
          </div>
          <div className="flex space-x-6 pt-4 items-center justify-between">
            <BsTwitterX color="white" className="text-xl" />
            <AiFillInstagram color="white" className="text-xl" />
            <GrLinkedinOption color="white" className="text-xl" />
            <GrYoutube color="white" className="text-xl" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/footerbg.webp')",
        }}
        className="absolute z-0 left-0 right-0 bg-cover bottom-0  mx-auto flex justify-center h-full w-full"
      ></div>
    </div>
  );
}

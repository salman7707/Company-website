"use client"
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
import { useMyContext } from "@/contexts/MyContexts";

export default function Footer() {
  const {theme} = useMyContext();
  return (
    <div className={`relative ${theme === "light" ? "bg-white" : "bg-black" } py-14`}>
      <div className="w-[93%] relative z-10 flex flex-col py-6 px-6 rounded-3xl max-w-[1300px] mx-auto bg-black h-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start w-[100%]">
          <div className="space-y-6 flex flex-col xs:items-center lg:items-start lg:w-[26%] w-full">
            <Image
              src={IMAGES.FLOGO}
              width={165}
              height={55}
              alt="LOGO"
              className=" "
            />
            <Paragraph color="gray" textAlign="text-center">
              © 2024 NetixSol Inc. All rights reserved.
            </Paragraph>
            <HeadingMedium
              color="white"
              weight="normal"
              fontFamily="font-manrope"
            >
              Subscribe Now
            </HeadingMedium>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <FooterInput type="text" placeholder="Email Address" />
                <FaArrowRight color="white" />
              </div>
              <div className="border-b-2 border-white w-full"></div>
            </div>
          </div>
          <div className=" flex lg:pt-4 xs:pt-10 flex-col justify-end  xs:items-start  lg:items-end lg:w-[23%] xl:w-[23%] w-full">
            <div className="xl:w-[53%] lg:w-[80%] lg:space-y-7 space-y-4">
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
          <div className="flex lg:space-y-7 xs:space-y-4 lg:pt-4 xs:pt-8 flex-col justify-start items-start xl:w-[10%] lg:w-[18%] xs:w-full">
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
          <div className="flex lg:space-y-7 xs:space-y-4 lg:pt-4 xs:pt-8 flex-col justify-end items-start lg:w-[18%] xs:w-full">
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
          <div className="flex lg:space-y-7 xs:space-y-4 lg:pt-4 xs:pt-8 flex-col justify-start items-start xs:w-full xl:w-[13%]  lg:w-[15%]">
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
        <div className="w-full flex lg:flex-row xs:flex-col  items-center justify-between ">
          <div className=" lg:w-[25%] xs:w-full flex pt-4 xs:pt-5 lg:space-x-0 xs:space-x-4 justify-between">
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
          <div className="flex space-x-6 lg:pt-4 xs:py-5 items-center justify-between">
            <BsTwitterX color="white" className="text-xl" />
            <AiFillInstagram color="white" className="text-xl" />
            <GrLinkedinOption color="white" className="text-xl" />
            <GrYoutube color="white" className="text-xl" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/sideImage/footerbg.PNG')",
        }}
        className="absolute z-0 left-0 right-0 -top-20 bg-left-top mx-auto flex justify-start h-[546px] w-full"
      ></div>
    </div>
  );
}

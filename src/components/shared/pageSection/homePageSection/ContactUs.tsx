"use client";
import Button from "@/components/template/button/Button";
import Input from "@/components/template/form/input/Input";
import TextArea from "@/components/template/form/input/TextArea";
import Label from "@/components/template/form/label/Label";
import HeadingLarge from "@/components/template/headings/HeaderLarge";
import HeaderMedium from "@/components/template/headings/HeaderMedium";
import Paragraph from "@/components/template/headings/Paragraph";
import Image from "next/image";
import React, { useState } from "react";
import { IMAGES } from "../../../../../public/images";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

export default function ContactUs() {
  const [location, setLocation] = useState(false);
  return (
    <div className="relative z-10 w-full max-w-[1210px] mx-auto px-0 py-8 flex items-center justify-between space-x-2">
      <div className="space-y-4 w-[56%]">
        <HeadingLarge color="black" smallScreenFont="36" fontSize="40">
          Contact Us
        </HeadingLarge>
        <Paragraph color="black" fontSize="large">
          Whether you have a technical questionor ready to start cooperation
          <br />
          NetixSol team remain committed to assist with your selection needs
        </Paragraph>
        <div className="w-full h-full ">
          <form className="bg-[#E7E8EA] grid gap-y-2 grid-cols-2 justify-between items-center w-full h-full shadow-lg rounded-3xl px-6 py-6">
            <div className="space-y-1 w-[95%]">
              <Label
                fontSize="medium"
                fontFamily="font-manrope"
                weight="medium"
                color="black"
              >
                Full Name
              </Label>
              <Input
                type="text"
                width="full"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-1 w-[97%]">
              <Label
                fontSize="medium"
                fontFamily="font-manrope"
                weight="medium"
                color="black"
              >
                Email
              </Label>
              <Input type="email" width="full" placeholder="Email Address" />
            </div>
            {/* second row */}
            <div className="space-y-1 pt-2 w-[95%]">
              <Label
                fontSize="medium"
                fontFamily="font-manrope"
                weight="medium"
                color="black"
              >
                Company name
              </Label>
              <Input
                type="text"
                width="full"
                placeholder="Tell Us Your Company Name"
              />
            </div>
            <div className="space-y-1 pt-2 w-[97%]">
              <Label
                fontSize="medium"
                fontFamily="font-manrope"
                weight="medium"
                color="black"
              >
                Phone number (optional)
              </Label>
              <Input
                type="text"
                width="full"
                placeholder="Enter your mobile number"
              />
            </div>
            {/* third row */}
            <div className="space-y-1 pt-4 w-[95%]">
              <HeaderMedium
                fontSize="18"
                fontFamily="font-manrope"
                weight="medium"
                color="black"
              >
                What communication channel do you prefer?
              </HeaderMedium>
              <div className="space-x-2 pt-4">
                <Input
                  type="radio"
                  width=""
                  placeholder="Enter your mobile number"
                />
                <Label color="black">Email</Label>
              </div>
              <div className="space-x-2 pt-2">
                <Input
                  type="radio"
                  width=""
                  placeholder="Enter your mobile number"
                />
                <Label color="black">PhoneCall</Label>
              </div>
              <div className="space-x-2 pt-2">
                <Input
                  type="radio"
                  width=""
                  placeholder="Enter your mobile number"
                />
                <Label color="black">Whatsapp</Label>
              </div>
              <div className="space-x-2 pt-2">
                <Input
                  type="radio"
                  width=""
                  placeholder="Enter your mobile number"
                />
                <Label color="black">Telegram</Label>
              </div>
              <div className="py-4">
                <Button bgColor="primary" className="w-full" rounded="full">
                  Send
                </Button>
              </div>
            </div>
            <div className="flex flex-col pt-1 justify-start">
              <Label
                color="black"
                weight="medium"
                fontFamily="font-manrope"
                fontSize="medium"
              >
                Message (optional)
              </Label>
              <TextArea
                rows={6}
                placeholder="Tell us your project and request"
              />
              <div className="py-2">
                <Paragraph color="black" fontSize="extrasmall">
                  By clicking this button you agree to share your data with
                  NetixSol. Information will be used for communication purposes
                  only.
                </Paragraph>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[44%] px-8">
        <div className="w-full space-y-4 flex flex-col">
          <div className="w-full flex ">
            <div
              className="space-y-2 w-full cursor-pointer"
              onClick={() => setLocation(true)}
            >
              <HeaderMedium
                weight="medium"
                fontFamily="font-manrope"
                fontSize="24"
                textAlign="center"
                color={location === true ? "black" : "gray"}
              >
                Dubai
              </HeaderMedium>
              <div
                className={`border-b-[3px] ${
                  location === true ? "border-b-black" : "border-b-gray"
                } `}
              ></div>
            </div>
            <div
              className="space-y-2 w-full cursor-pointer"
              onClick={() => setLocation(false)}
            >
              <HeaderMedium
                weight="medium"
                fontFamily="font-manrope"
                fontSize="24"
                textAlign="center"
                color={location === false ? "black" : "gray"}
              >
                Pakistan
              </HeaderMedium>
              <div
                className={`border-b-[3px] ${
                  location === false ? "border-b-black" : "border-b-gray"
                } `}
              ></div>
            </div>
          </div>
          <div className="bg-[#E7E8EA] w-full h-72 rounded-md">
            <div className="flex space-x-2 items-center justify-center h-full">
              <div className="w-[120px] h-[120px] border-[3px] bg-blue-300 border-black rounded-full overflow-hidden">
                <Image
                  src={IMAGES.SIR}
                  width={120}
                  height={120}
                  alt="sir usman"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <HeaderMedium
                  fontSize="24"
                  color="black"
                  fontFamily="font-custom"
                  weight="medium"
                >
                  Mirza Usman
                </HeaderMedium>
                <HeaderMedium
                  fontSize="18"
                  color="black"
                  weight="medium"
                  fontFamily="font-manrope"
                >
                  CEO Netixsol Pvt. LTD
                </HeaderMedium>
                <HeaderMedium
                  fontSize="16"
                  color="black"
                  fontFamily="font-manrope"
                  weight="normal"
                >
                  mirza@netixsol.com
                </HeaderMedium>
                <HeaderMedium
                  fontSize="16"
                  fontFamily="font-manrope"
                  color="black"
                  weight="normal"
                >
                  {location === true
                    ? "+971 50 89 23 898"
                    : "+92 300 66 54 898"}
                </HeaderMedium>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <HeaderMedium color="black" fontSize="16" weight="normal">
              We also use messengers
            </HeaderMedium>
            <IoLogoWhatsapp color="black" className="text-3xl" />
            <FaTelegram color="black" className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

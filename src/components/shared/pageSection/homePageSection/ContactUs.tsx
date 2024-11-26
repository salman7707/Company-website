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
import { FaCalendarMinus } from "react-icons/fa6";
import { useMyContext } from "@/contexts/MyContexts";
import { ContactUsType } from "../../types/componentTypes/ContactUsSection";

export default function ContactUs({
  locationSec = true,
  headingSec = true,
  consultantSec = false,
}: ContactUsType) {
  const [location, setLocation] = useState(false);
  const { theme } = useMyContext();
  return (
    <div
      className={`relative z-10 w-full ${
        consultantSec === true ? "max-w-[1250px]" : "max-w-[1210px]"
      }  mx-auto px-8 py-8 space-y-6 flex flex-col  justify-end `}
    >
      {/* Heading Section */}
      {headingSec && (
        <div className="lg:w-full w-[90%] mx-auto flex flex-col lg:items-start items-center justify-center">
          <HeadingLarge
            color={theme === "light" ? "black" : "white"}
            smallScreenFont="36"
            textAlign="text-center"
            fontSize="40"
          >
            Contact Us
          </HeadingLarge>
          <Paragraph
            color={theme === "light" ? "black" : "white"}
            fontSize="large"
            textAlign="lg:text-left text-center "
          >
            Whether you have a technical questionor ready to start cooperation
            <br />
            Demo team remain committed to assist with your selection needs
          </Paragraph>
        </div>
      )}

      <div
        className={`flex lg:flex-row ${
          !consultantSec ? "flex-col-reverse" : "flex-col"
        }  lg:space-y-0 xs:space-y-4 items-start justify-between gap-x-3 xl:w-full lg:w-[100%] mx-auto`}
      >
        {/* Consultant Section */}
        {consultantSec && (
          <div
            className={`${
              theme === "light"
                ? "bg-secondarygray"
                : "bg-lightblack border border-gray"
            } lg:w-[40%] md:w-[70%] w-full mx-auto h-auto rounded-3xl border px-5 py-8 space-y-4`}
          >
            <HeadingLarge
              color={theme === "light" ? "black" : "white"}
              fontFamily="font-custom"
              weight="medium"
              smallScreenFont="36"
            >
              Book a Free Consultant
            </HeadingLarge>
            <Paragraph
              color={theme === "light" ? "black" : "white"}
              fontSize="medium"
            >
              Book a slot with our senior team to discuss your project and see
              how we can apply our expertise to your idea.
            </Paragraph>
            <Button
              color="white"
              bgColor="primary"
              className="w-full"
              fontFamily="font-custom"
            >
              <div className="flex items-center justify-center gap-x-3">
                Schedule a Call <FaCalendarMinus />
              </div>
            </Button>
          </div>
        )}
        {/* Form Section */}
        <div
          className={`space-y-4 lg:w-[60%] md:w-[95%] mx-auto w-full lg:pt-0 pt-8 `}
        >
          <div className="w-full h-full">
            <form
              className={` ${
                theme === "light"
                  ? "bg-secondarygray"
                  : "bg-lightblack border border-gray"
              } grid gap-y-2 xs:grid-cols-1 md:grid-cols-2  justify-between items-center w-full h-full shadow-lg rounded-3xl px-6 py-6`}
            >
              <div className="space-y-1 w-[95%]">
                <Label
                  fontSize="medium"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
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
                  color={theme === "light" ? "black" : "white"}
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
                  color={theme === "light" ? "black" : "white"}
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
                  color={theme === "light" ? "black" : "white"}
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
              <div className="md:grid xs:hidden space-y-1 pt-4 w-[95%]">
                <HeaderMedium
                  fontSize="18"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
                >
                  What communication channel do you prefer?
                </HeaderMedium>
                <div className="space-x-2 pt-4">
                  <Input
                    type="radio"
                    width=""
                    placeholder="Enter your mobile number"
                  />
                  <Label color={theme === "light" ? "black" : "white"}>
                    Email
                  </Label>
                </div>
                <div className="space-x-2 pt-2">
                  <Input
                    type="radio"
                    width=""
                    placeholder="Enter your mobile number"
                  />
                  <Label color={theme === "light" ? "black" : "white"}>
                    PhoneCall
                  </Label>
                </div>
                <div className="space-x-2 pt-2">
                  <Input
                    type="radio"
                    width=""
                    placeholder="Enter your mobile number"
                  />
                  <Label color={theme === "light" ? "black" : "white"}>
                    Whatsapp
                  </Label>
                </div>
                <div className="space-x-2 pt-2">
                  <Input
                    type="radio"
                    width=""
                    placeholder="Enter your mobile number"
                  />
                  <Label color={theme === "light" ? "black" : "white"}>
                    Telegram
                  </Label>
                </div>
                <div className="py-4">
                  <Button bgColor="primary" className="w-full" rounded="full">
                    Send
                  </Button>
                </div>
              </div>
              <div className=" xs:hidden md:flex flex-col pt-1 justify-start">
                <Label
                  color={theme === "light" ? "black" : "white"}
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
                  <Paragraph
                    color={theme === "light" ? "black" : "white"}
                    fontSize="extrasmall"
                  >
                    By clicking this button you agree to share your data with
                    Demo. Information will be used for communication purposes
                    only.
                  </Paragraph>
                </div>
              </div>
              <div className="flex w-full md:flex-row flex-col-reverse items-center md:hidden">
                <div className="space-y-1 pt-4 w-[95%]">
                  <HeaderMedium
                    fontSize="18"
                    fontFamily="font-manrope"
                    weight="medium"
                    color={theme === "light" ? "black" : "white"}
                  >
                    What communication channel do you prefer?
                  </HeaderMedium>
                  <div className="space-x-2 pt-4">
                    <Input
                      type="radio"
                      width=""
                      placeholder="Enter your mobile number"
                    />
                    <Label color={theme === "light" ? "black" : "white"}>
                      Email
                    </Label>
                  </div>
                  <div className="space-x-2 pt-2">
                    <Input
                      type="radio"
                      width=""
                      placeholder="Enter your mobile number"
                    />
                    <Label color={theme === "light" ? "black" : "white"}>
                      PhoneCall
                    </Label>
                  </div>
                  <div className="space-x-2 pt-2">
                    <Input
                      type="radio"
                      width=""
                      placeholder="Enter your mobile number"
                    />
                    <Label color={theme === "light" ? "black" : "white"}>
                      Whatsapp
                    </Label>
                  </div>
                  <div className="space-x-2 pt-2">
                    <Input
                      type="radio"
                      width=""
                      placeholder="Enter your mobile number"
                    />
                    <Label color={theme === "light" ? "black" : "white"}>
                      Telegram
                    </Label>
                  </div>
                  <div className="py-4">
                    <Button bgColor="primary" className="w-full" rounded="full">
                      Send
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col pt-1 justify-start">
                  <Label
                    color={theme === "light" ? "black" : "white"}
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
                    <Paragraph
                      color={theme === "light" ? "black" : "white"}
                      fontSize="extrasmall"
                    >
                      By clicking this button you agree to share your data with
                      Demo. Information will be used for communication purposes
                      only.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Location Section */}
        {locationSec && (
          <div className="lg:w-[44%] md:w-[90%] mx-auto xs:w-full md:px-8 px-4">
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
                    color={
                      location === true
                        ? theme === "light"
                          ? "black"
                          : "white"
                        : "gray"
                    }
                  >
                    Dubai
                  </HeaderMedium>
                  <div
                    className={`border-b-[3px] ${
                      location === true
                        ? theme === "light"
                          ? "border-b-black"
                          : "border-b-white"
                        : "border-b-gray"
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
                    color={
                      location === false
                        ? theme === "light"
                          ? "black"
                          : "white"
                        : "gray"
                    }
                  >
                    Pakistan
                  </HeaderMedium>
                  <div
                    className={`border-b-[3px] ${
                      location === false
                        ? theme === "light"
                          ? "border-b-black"
                          : "border-b-white"
                        : "border-b-gray"
                    } `}
                  ></div>
                </div>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-secondarygray" : "bg-medGray"
                } w-full h-72 rounded-md`}
              >
                <div className="flex md:flex-row flex-col space-x-2 items-center justify-center h-full">
                  <div className="w-[120px] h-[120px] border-[3px] bg-blue-300 border-black rounded-full overflow-hidden">
                    <Image
                      src={IMAGES.PERSONICON}
                      width={120}
                      height={120}
                      alt="sir usman"
                    />
                  </div>
                  <div className="flex flex-col md:items-start items-center space-y-2">
                    <HeaderMedium
                      fontSize="24"
                      color={theme === "light" ? "black" : "white"}
                      fontFamily="font-custom"
                      weight="medium"
                    >
                      Salman
                    </HeaderMedium>
                    <HeaderMedium
                      fontSize="18"
                      color={theme === "light" ? "black" : "white"}
                      weight="medium"
                      fontFamily="font-manrope"
                    >
                      CEO XYZ PVT.LTD
                    </HeaderMedium>
                    <HeaderMedium
                      fontSize="16"
                      color={theme === "light" ? "black" : "white"}
                      fontFamily="font-manrope"
                      weight="normal"
                    >
                      Salman@xyz.com
                    </HeaderMedium>
                    <HeaderMedium
                      fontSize="16"
                      fontFamily="font-manrope"
                      color={theme === "light" ? "black" : "white"}
                      weight="normal"
                    >
                      {location === true
                        ? "+971 00 00 00 111"
                        : "+92 000 00 00 111"}
                    </HeaderMedium>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <HeaderMedium
                  color={theme === "light" ? "black" : "white"}
                  fontSize="16"
                  weight="normal"
                >
                  We also use messengers
                </HeaderMedium>
                <IoLogoWhatsapp
                  color={theme === "light" ? "black" : "white"}
                  className="text-3xl"
                />
                <FaTelegram
                  color={theme === "light" ? "black" : "white"}
                  className="text-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

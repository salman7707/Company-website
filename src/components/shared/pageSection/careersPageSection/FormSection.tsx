"use client";
import Button from "@/components/template/button/Button";
import Input from "@/components/template/form/input/Input";
import TextArea from "@/components/template/form/input/TextArea";
import Label from "@/components/template/form/label/Label";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function FormSection() {
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto xl:px-0 px-6">
      <div className={`space-y-4 mx-auto w-full lg:pt-0 pt-8 `}>
        <div className="w-full h-full">
          <form
            className={` ${
              theme === "light"
                ? "bg-secondarygray"
                : "bg-lightblack border border-gray"
            } flex flex-col shadow-lg rounded-3xl`}
          >
            <div className="flex items-center justify-center py-4">
              <HeaderLarge
                color={theme === "light" ? "black" : "white"}
                fontSize="40"
              >
                Apply Now
              </HeaderLarge>
            </div>
            <div className="grid grid-cols-1 justify-between items-center w-full h-full px-6 py-6">
              <div className="grid md:grid-cols-2 grid-cols-1">
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
                  <Input
                    type="email"
                    width="full"
                    placeholder="Email Address"
                  />
                </div>
                {/* second row */}
                <div className="space-y-1 pt-2 w-[95%]">
                  <Label
                    fontSize="medium"
                    fontFamily="font-manrope"
                    weight="medium"
                    color={theme === "light" ? "black" : "white"}
                  >
                    Linkedin Profile *
                  </Label>
                  <Input
                    type="text"
                    width="full"
                    placeholder="www.linkedin.com/in/yourname"
                  />
                </div>
                <div className="space-y-1 pt-2 w-[97%]">
                  <Label
                    fontSize="medium"
                    fontFamily="font-manrope"
                    weight="medium"
                    color={theme === "light" ? "black" : "white"}
                  >
                    Phone *
                  </Label>
                  <Input
                    type="text"
                    width="full"
                    placeholder="Enter your mobile number"
                  />
                </div>
                {/* second row */}
                <div className="space-y-1 pt-2 w-[95%]">
                  <Label
                    fontSize="medium"
                    fontFamily="font-manrope"
                    weight="medium"
                    color={theme === "light" ? "black" : "white"}
                  >
                    Expected Salary In PKR
                  </Label>
                  <Input type="text" width="full" placeholder="Ex 1234" />
                </div>
                <div className="space-y-1 pt-2 w-[97%]">
                  <Label
                    fontSize="medium"
                    fontFamily="font-manrope"
                    weight="medium"
                    color={theme === "light" ? "black" : "white"}
                  >
                    Experience
                  </Label>
                  <Input
                    type="text"
                    width="full"
                    placeholder="1 Year Experience"
                  />
                </div>
              </div>
              {/* third row */}
              <div className="space-y-1 pt-2 w-full">
                <Label
                  fontSize="medium"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
                >
                  Your Location * (Must be Willing to Relocate to Faisalabad)
                </Label>
                <Input
                  type="text"
                  width="full"
                  placeholder="Enter your City Name"
                />
              </div>
              <div className="space-y-1 pt-2 w-full">
                <Label
                  fontSize="medium"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
                >
                  Select a Job *
                </Label>
                <Input
                  type="text"
                  width="full"
                  placeholder="Select a Job title"
                />
              </div>
              <div className="space-y-1 pt-2 w-full">
                <Label
                  fontSize="medium"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
                >
                  Highlight Your Skills
                </Label>
                <TextArea
                  rows={3}
                  className="w-full"
                  placeholder="i.e node.js, react.js etc."
                ></TextArea>
              </div>
              <div className="space-y-1 pt-2 w-full">
                <Label
                  fontSize="medium"
                  fontFamily="font-manrope"
                  weight="medium"
                  color={theme === "light" ? "black" : "white"}
                >
                  Place your Cv *
                </Label>
                <div className={`w-full border rounded-xl ${ theme === "light" ? "bg-white" : "bg-medGray" }  border-transparent`}>
                  <label
                    htmlFor="file-upload"
                    className=" cursor-pointer rounded-md bg-gray-800 p-6 text-center text-white"
                  >
                    <p className={` md:text-2xl text-lg ${ theme === "light" ? "text-black" : "text-white"} `}>
                      Click to upload files, or drag & drop files here
                      <span className="text-blue-500 text-[22px] pl-2">
                        browse
                      </span>
                    </p>

                    <p className={`mt-2 text-sm ${ theme === "light" ? "text-black" : "text-white"}`}>
                      (CV, Maximum file size is 4 MB)
                    </p>
                    <Input id="file-upload" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="w-full py-5 flex justify-center">
                <Button bgColor="primary" size="extralarge" color="white">
                  Submit
                </Button>
              </div>
              <div className="w-full flex justify-center">
                <Paragraph color={ theme === "light" ? "gray" : "white"} textAlign="center" fontSize="small">
                  By clicking this button you agree to share your data with
                  NetixSol. Information will be used for communication purposes
                  only.
                </Paragraph>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

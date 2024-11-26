"use client";
import Button from "@/components/template/button/Button";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import HeaderMedium from "@/components/template/headings/HeaderMedium";
import Paragraph from "@/components/template/headings/Paragraph";
import { useMyContext } from "@/contexts/MyContexts";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import jobs from "@/lib/AvaliableJobs";

export default function OpenPosition() {
  const [mern, setMern] = useState<{ open: boolean; id: number | null }>({open:false,id:null});
  const { theme } = useMyContext();
  const handlestate = (id: number) => {
      setMern((prev) =>({ ...prev,open: !prev.open,id:id}))
  }
  return (
    <div className="w-full max-w-[1210px] mx-auto py-10 space-y-12">
      <div className="">
        <HeaderLarge
          textAlign="text-center"
          fontSize="40"
          smallScreenFont="36"
          color={theme === "white" ? "black" : "white"}
        >
          Open positions at Demo
        </HeaderLarge>
      </div>

      <div className="space-y-4">
        {jobs.map((data,index) => (
          <div
            key={index}
            className={`w-[89%] mx-auto rounded-3xl border ${
              theme === "light"
                ? "bg-secondarygray border-transparent"
                : "bg-black border-lightgray"
            } `}
          >
            <div
              onClick={() => handlestate(data.id)}
              className={`${
                theme === "light" ? "bg-secondarygray" : "bg-primary"
              } py-4 px-8 rounded-3xl flex justify-between cursor-pointer `}
            >
              <HeaderLarge
                fontSize="35"
                weight="medium"
                color={theme === "light" ? "black" : "white"}
              >
                {data.title}
              </HeaderLarge>
              <div className="flex items-center space-x-2 justify-center">
                <div className="flex items-center">
                  <FaLocationDot
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } md:text-2xl text-xl`}
                  />
                  <HeaderMedium
                    fontSize="26"
                    smallScreenFont="14"
                    weight="normal"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.location}
                  </HeaderMedium>
                </div>
                {mern.open && index === mern.id ? (
                  <IoIosArrowUp
                    className="text-3xl"
                    color={theme === "light" ? "black" : "white"}
                  />
                ) : (
                  <IoIosArrowDown
                    className="text-3xl"
                    color={theme === "light" ? "black" : "white"}
                  />
                )}
              </div>
            </div>

            {mern.open && index === mern.id && (
              <div
                className={`${
                  theme === "light" ? "bg-secondarygray" : "bg-lightblack"
                }  py-4 px-8 rounded-b-3xl flex flex-col items-center justify-between gap-y-4`}
              >
                <div className="space-y-3">
                  <HeaderMedium
                    fontSize="26"
                    weight="semibold"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.insideHead1}
                  </HeaderMedium>
                  <Paragraph
                    fontSize="24"
                    weight="normal"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.paragraph1}
                  </Paragraph>
                </div>
                <div className="space-y-3">
                  <HeaderMedium
                    fontSize="26"
                    weight="semibold"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.insideHead2}
                  </HeaderMedium>
                  <Paragraph
                    fontSize="24"
                    weight="normal"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.paragraph2}
                  </Paragraph>
                </div>
                <div className="space-y-3">
                  <HeaderMedium
                    fontSize="26"
                    weight="semibold"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.insideHead3}
                  </HeaderMedium>
                  <Paragraph
                    fontSize="24"
                    weight="normal"
                    color={theme === "light" ? "black" : "white"}
                  >
                    {data.paragraph3}
                  </Paragraph>
                  <div className="flex lg:justify-start justify-center ">
                    <Button
                      color="primary"
                      fontSize="extralarge"
                      fontFamily="font-manrope"
                      rounded="null"
                      className="border-b-2 border-primary"
                    >
                      <div className="flex items-center justify-center">
                        Apply Now
                        <GoArrowRight className="text-primary text-3xl group-hover:pl-2 font-bold  " />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

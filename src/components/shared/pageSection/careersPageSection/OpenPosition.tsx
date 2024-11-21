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

export default function OpenPosition() {
  const [mern, setMern] = useState(false);
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto py-10 space-y-12">
      <div className="">
        <HeaderLarge
          textAlign="text-center"
          fontSize="40"
          color={theme === "white" ? "black" : "white"}
        >
          Open positions at NetixSol
        </HeaderLarge>
      </div>

      <div
        className={`w-[89%] mx-auto rounded-3xl border ${
          theme === "light"
            ? "bg-secondarygray border-transparent"
            : "bg-black border-lightgray"
        } `}
      >
        <div
          onClick={() => setMern(!mern)}
          className={`${
            theme === "light" ? "bg-secondarygray" : "bg-primary"
          } py-4 px-8 rounded-3xl flex justify-between cursor-pointer `}
        >
          <HeaderLarge
            fontSize="35"
            weight="medium"
            color={theme === "light" ? "black" : "white"}
          >
            MERN Stack Developer
          </HeaderLarge>
          <div className="flex items-center space-x-2 justify-center">
            <div className="flex items-center">
              <FaLocationDot
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } text-2xl`}
              />
              <HeaderMedium
                fontSize="26"
                weight="normal"
                color={theme === "light" ? "black" : "white"}
              >
                Onsite
              </HeaderMedium>
            </div>
            {mern ? (
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

        {mern && (
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
                About the Role
              </HeaderMedium>
              <Paragraph
                fontSize="24"
                weight="normal"
                color={theme === "light" ? "black" : "white"}
              >
                We are looking for a MERN-Stack Developer, having experience in
                Front End & Back End development.
              </Paragraph>
            </div>
            <div className="space-y-3">
              <HeaderMedium
                fontSize="26"
                weight="semibold"
                color={theme === "light" ? "black" : "white"}
              >
                Responsibilities:
              </HeaderMedium>
              <Paragraph
                fontSize="24"
                weight="normal"
                color={theme === "light" ? "black" : "white"}
              >
                Participation in design, development, and implementation of
                Software projects. Responsible for developing reusable and
                modular code libraries for use across Front-end development.
                Developing large-scale infrastructural data systems using the
                latest technologies with Typescript & React. Excellent written
                and verbal communication skills. Multi-tasking and time
                management skills, with the ability to prioritize tasks.
                Qualifications
              </Paragraph>
            </div>
            <div className="space-y-3">
              <HeaderMedium
                fontSize="26"
                weight="semibold"
                color={theme === "light" ? "black" : "white"}
              >
                Skills:
              </HeaderMedium>
              <Paragraph
                fontSize="24"
                weight="normal"
                color={theme === "light" ? "black" : "white"}
              >
                At least 1+ years of experience in React & 6 months of
                Experience in Typescript. Strong knowledge of MERN programming
                language, Experience with the full frameworks and tools.
                Additional Preferable Skills: - Gatsby - GraphQL - Web3 -
                Interested to learn new technology - Vue or Vanilla js -
                Server-Side Apply here or Send your Resume at
                Careers@netixsol.com
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
    </div>
  );
}

"use client";
import Button from "@/components/template/button/Button";
import List from "@/components/template/form/list/list";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Paragraph from "@/components/template/headings/Paragraph";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IMAGES } from "../../../../../public/images";
import { useMyContext } from "@/contexts/MyContexts";

interface ProjectSection {
  flow?: boolean;
  heading?: string;
  paragraph?: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  img?: string;
}

export default function ProjectSection({
  flow = false,
  heading,
  paragraph,
  list1,
  list2,
  list3,
  list4,
  img,
}: ProjectSection) {
  const { theme } = useMyContext();
  return (
    <div className="w-full max-w-[1210px] mx-auto lg:pt-28 pt-10 relative">
      <div
        className={`flex  ${
          flow === true
            ? "lg:flex-row-reverse flex-col-reverse"
            : "lg:flex-row flex-col-reverse"
        } flex-row xl:px-0 lg:px-6 items-center xl:justify-between justify-center mx-auto md:w-[60%]  lg:w-full w-[94%]`}
      >
        <div className="w-full space-y-5 xl:p-0 lg:p-6 pt-4">
          <HeaderLarge
            color={theme === "light" ? "black" : "white"}
            fontSize="36"
            fontFamily="font-custom"
            weight="medium"
            smallScreenFont="36"
            textAlign="text-center lg:text-left"
          >
            {heading}
          </HeaderLarge>
          <Paragraph
            color={theme === "light" ? "black" : "white"}
            fontSize="large"
            weight="medium"
          >
            {paragraph}
          </Paragraph>
          <div className="space-y-1">
            <List
              color={theme === "light" ? "black" : "white"}
              fontSize="medium"
              fontFamily="font-custom"
              weight="medium"
            >
              {list1}
            </List>
            <List
              color={theme === "light"? "black" : "white"}
              fontSize="medium"
              fontFamily="font-custom"
              weight="medium"
            >
              {list2}
            </List>
            <List
              color={theme === "light"? "black" : "white"}
              fontSize="medium"
              fontFamily="font-custom"
              weight="medium"
            >
              {list3}
            </List>
            <List
              color={theme === "light"? "black" : "white"}
              fontSize="medium"
              fontFamily="font-custom"
              weight="medium"
            >
              {list4}
            </List>
          </div>
          <div className="flex lg:justify-start justify-center ">
            <Button
              color="primary"
              fontSize="extralarge"
              fontFamily="font-manrope"
              rounded="null"
              className="border-b-2 border-primary"
            >
              <div className="flex items-center justify-center">
                View Case Study
                <GoArrowRight className="text-primary text-3xl group-hover:pl-2 font-bold  " />
              </div>
            </Button>
          </div>
        </div>
        <div className="xl:w-full lg:w-11/12 lg:h-[300px]">
          <Image
            src={img || IMAGES.PROJECT1}
            alt="project1"
            width={548}
            height={200}
            layout="intrinsic"
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,460px"
          />
        </div>
      </div>
    </div>
  );
}

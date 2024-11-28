"use client";
import React, { useState } from "react";
import ProjectData from "@/lib/ProjectData";
import { useMyContext } from "@/contexts/MyContexts";
import HeaderLarge from "@/components/template/headings/HeaderLarge";
import Button from "@/components/template/button/Button";
import ButtonData from "@/lib/ButtonData";
import ProjectCard from "@/components/template/cards/ProjectCard";

export default function ProjectSection() {
  const { theme } = useMyContext();
  const [state, setState] = useState<{ id: number }>({ id: 0 });
  const [type, setType] = useState("all");
  const handleState = (id: number, type: string) => {
    setState({ id: id });
    setType(type);
  };
  const project =
    type === "all"
      ? ProjectData
      : ProjectData.filter((project) => project.type === type);
  return (
    <div className="w-full max-w-[1210px] mx-auto lg:pt-28 pt-10 relative py-20">
      <div
        className={`flex 
          flex-col xl:px-0 lg:px-6 items-center xl:justify-between justify-center mx-auto md:w-[60%]  lg:w-full w-[94%] gap-y-16`}
      >
        <div className="flex flex-col lg:items-start items-center gap-y-3 justify-between w-full">
          <HeaderLarge
            color={theme === "light" ? "black" : "white"}
            fontSize="64"
            mdScreenFont="48"
            smallScreenFont="32"
          >
            Our BestPortfolio
          </HeaderLarge>
          <div className="flex flex-wrap gap-2 xss:justify-center xsss:px-0 justify-start  px-4">
            {ButtonData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <Button
                  HandleClick={() => handleState(data.id, data.type)}
                  bgColor={state.id === index ? "primary" : "lightgray"}
                  hoverBg={state.id !== index ? "primary" : ""}
                  color="white"
                  size="extralarge"
                  fontSize="large"
                  rounded="normal"
                >
                  {data.text}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 justify-content-center gap-x-8 gap-y-8 xl:px-0 lg::px-20 px-4">
          {project.map((data, index) => (
            <div key={index}>
              <ProjectCard
                heading={data.heading}
                smallHeading={data.headingsmall}
                img={data.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

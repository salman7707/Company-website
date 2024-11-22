"use client";
import React, {
  useEffect,
  useState,
} from "react";
import { IMAGES } from "../../../../../public/images";
import HeaderMedium from "@/components/template/headings/HeaderMedium";

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
interface e {
  x: number;
  y: number;
}

export default function ProjectSection({ flow = false }: ProjectSection) {
  const [position, setPosition] = useState<e>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="w-full max-w-[1210px] mx-auto lg:pt-28 pt-10 relative py-20">
      <div
        className={`flex  ${
          flow === true
            ? "lg:flex-row-reverse flex-col-reverse"
            : "lg:flex-row flex-col-reverse"
        } flex-row xl:px-0 lg:px-6 items-center xl:justify-between justify-center mx-auto md:w-[60%]  lg:w-full w-[94%]`}
      >
        <div className="w-full">
          <div className="bg-gradient-to-br from-primary to-primary w-[420px] overflow-hidden group h-[450px] border-white relative z-10 flex items-end ">
           
            <div className="translate-y-40 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-1000 ease-in-out w-full z-10 text-white relative bg-black px-3 py-[34px] space-y-4 border-b-2 border-b-primary">
              <HeaderMedium color="primary" fontSize="24">
                Weather Forecast
              </HeaderMedium>
              <HeaderMedium color="white" fontSize="20">
                Application + SEO
              </HeaderMedium>
            </div>

            <div className="z-0 absolute bg-cover top-0 bottom-0 h-full bg-gradient-to-t from-primary to-primary">
              <img
                src={IMAGES.TEN}
                alt="project1"
                className="z-0 w-[420px] h-full"
              />
            </div>
            <div className="absolute "></div>
          </div>
        </div>
        <div
          className={`w-6 h-6 bg-[#9696964D] z-50 fixed rounded-full`}
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        ></div>
      </div>
    </div>
  );
}

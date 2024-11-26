"use client";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";
import { IMAGES } from "../../../../public/images";
import Image from "next/image";

export default function ToggleBtn() {
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const { theme, setTheme } = useMyContext();

  return (
    <div
      className={`px-1.5 w-16 h-8 flex items-center overflow-hidden relative rounded-full ${
        theme === "light" ? " bg-blue-200" : "bg-lightgray"
      } `}
      onClick={handleClick}
    >
      <div
        className={` ${
          theme === "light" ? "bg-yellow" : "bg-white w-5 h-5 overflow-hidden"
        }  w-5 h-5 rounded-full transition-transform duration-100 relative ${
          theme === "light" ? "translate-x-0 " : "translate-x-8"
        }`}
      >
        <div
          className={`bg-lightgray w-5 h-5 rounded-full absolute right-2 -top-1 ${
            theme === "light" ? "hidden" : "flex"
          } `}
        ></div>
      </div>
      <Image
        src={IMAGES.STAR}
        width={10}
        height={10}
        alt={"star"}
        className={` ${
          theme === "light" ? "hidden" : "flex"
        } absolute left-2 animate-spin top-1 transition duration-1000`}
        style={{
          filter: "invert(1)",
        }}
      />
      <Image
        src={IMAGES.STAR}
        width={10}
        height={10}
        alt={"star"}
        className={`${
          theme === "light" ? "hidden" : "flex"
        } absolute left-4 bottom-2 animate-pulse transition duration-1000`}
        style={{
          filter: "invert(1)",
        }}
      />
      <Image
        src={IMAGES.STAR}
        width={10}
        height={10}
        alt={"star"}
        className={`${
          theme === "light" ? "hidden" : "flex"
        } absolute left-[26px] top-0 animate-scroll transition duration-1000`}
        style={{
          filter: "invert(1)",
        }}
      />
      <svg
        stroke="currentColor"
        fill="white"
        viewBox="0 0 640 512"
        className={`${
          theme === "light" ? "flex" : "hidden"
        } text-white animatetogglebtn sm:text-2xl -bottom-1 absolute -left-2`}
        height="0.99rem"
        width="0.99rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
      </svg>
      <svg
        stroke="currentColor"
        fill="white"
        viewBox="0 0 640 512"
        className={`${
          theme === "light" ? "flex" : "hidden"
        } move-horizantal text-white sm:text-2xl top-0 animatetogglebtn absolute -left-4`}
        height="1.35rem"
        width="1.2rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
      </svg>
      {/* <Image src={IMAGES.CLOUD} alt="cloud" height={20} width={20} className=""/> */}
    </div>
  );
}

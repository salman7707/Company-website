"use client";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function ToggleBtn() {
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const { theme, setTheme } = useMyContext();
  return (
    <div
      className={`px-1.5 w-16 h-8 flex items-center relative rounded-full ${ theme === "light" ?" bg-blue-200":"bg-lightgray" } `}
      onClick={handleClick}
    >
      <div
        className={`bg-yellow w-5 h-5 rounded-full transition-transform duration-100 ${
          theme === "light" ? "translate-x-0 " : "translate-x-8"
        }`}
      ></div>
      <svg
        stroke="currentColor"
        fill="white"
        viewBox="0 0 640 512"
        className="text-white animatetogglebtn sm:text-2xl -bottom-1 absolute -left-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
      </svg>
      {/* <Image src={IMAGES.CLOUD} alt="cloud" height={20} width={20} className=""/> */}
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../../../public/images";
import Button from "../template/button/Button";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleBtn from "../template/button/ToggleBtn";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useMyContext } from "@/contexts/MyContexts";
import { HiUsers } from "react-icons/hi2";
import { FaLaptop } from "react-icons/fa";
import navData from "@/lib/navbarData";
import navDataMob from "@/lib/navDataMobile";

export default function Navbar() {
  const Ref = useRef<HTMLDivElement | null>(null);
  const { theme } = useMyContext();
  const [open, setOpen] = useState(false);
  const [hamburState, setHamburState] = useState(false);

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleoutsideclick = (e: MouseEvent) => {
    if (Ref.current && !Ref.current.contains(e.target as Node)) {
      setHamburState(false)
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleoutsideclick);
    return () => window.removeEventListener("mousedown", handleoutsideclick);
  }, []);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white shadow-2xl "
          : "bg-black shadow-custom-shadow shadow-gray"
      }  absolute mt-4 z-20 left-0 right-0 top-0 rounded-full md:w-[96%] w-[90%] max-w-[1255px] mx-auto flex items-center justify-between md:px-4 px-3 md:py-2 py-4`}
    >
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image
            src={theme === "light" ? IMAGES.LOGO : IMAGES.LOGOW}
            width={0}
            height={0}
            alt="logo"
            className=" md:w-[230px] h-auto w-[170px]"
          />
        </Link>
      </div>

      <div className="flex-1 hidden relative  lg:flex items-center justify-between ">
        <div
          className={`flex items-center xl:px-20 lg:px-5 justify-center font-custom ${
            theme === "light" ? "text-black" : "text-white"
          } font-medium text-xl xl:space-x-12 lg:space-x-6`}
        >
          {navData.map((data) => (
            <div
              key={data.id}
              onMouseEnter={data.inside && handleMouseEnter}
              onMouseLeave={data.inside && handleMouseLeave}
              className="group flex justify-between items-center relative"
            >
              <div className={`space-x-1 flex items-center`}>
                <Link href={data.link}> {data.name} </Link>
                {data.inside && <IoIosArrowDown />}
              </div>

              {data.inside && data.id === 3 && open && (
                <div
                  className={`absolute ${
                    theme === "light" ? " shadow-custom-shadow shadow-gray" : ""
                  } shadow-2xl top-10 bg-white w-[350px] h-16 rounded-md ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 px-2 py-1.5 gap-y-4 text-black w-full">
                    {data.inside.map((data) => (
                      <Link key={data.id} href={data.link}>
                        <div className="flex hover:bg-black rounded-lg py-3 px-6 w-[170px] items-center hover:text-white justify-start gap-x-3 text-lg">
                          {data.id == 0 ? <HiUsers /> : <FaLaptop />}
                          {data.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <ToggleBtn />
          <div className="hidden xl:block">
            <Button bgColor="primary" color="white" size="extralarge">
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex">
        <GiHamburgerMenu
          className={`${
            theme === "light" ? "text-black" : "text-primary"
          } text-3xl`}
          onClick={() => setHamburState(true)}
        />
      </div>
      {hamburState && (
        <div
          ref={Ref}
          className={`transition-all duration-700 ease-linear absolute space-y-4 z-10 top-1 shadow-2xl bg-white w-[80%] h-auto px-10 py-10 ${
            hamburState ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <ToggleBtn />
            <IoCloseOutline
              className="text-black text-4xl"
              onClick={() => setHamburState(false)}
            />
          </div>
          <div className="font-manrope text-black font-bold text-xl space-y-8 pt-4">
            {navDataMob.map((data, index) => (
              <div key={index}>
                <Link href={data.link}>{data.name}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

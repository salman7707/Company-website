"use client";
import Image from "next/image";
import React, { useState } from "react";
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

export default function Navbar() {
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
            width={230}
            height={160}
            layout="intrinsic"
            alt="logo"
            className=" md:w-[230px] h-auto w-[170px]"
          />
        </Link>
      </div>

      <div className="flex-1 hidden relative  lg:flex items-center justify-between ">
        <div
          className={`flex items-center xl:px-14 lg:px-5 justify-center font-custom ${
            theme === "light" ? "text-black" : "text-white"
          } font-medium text-xl xl:space-x-10 lg:space-x-6`}
        >
          <div className="flex justify-between items-center">
            <Link href={"/services"}>Services</Link>
          </div>
          <div>
            <Link href={"/portfolio"}>Portfolio</Link>
          </div>
          <div className="flex justify-between items-center">
            <Link href={"/courses"}>Courses</Link>
          </div>
          <div className="flex  justify-between items-center">Discover</div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group flex justify-between items-center relative"
          >
            <div className={`space-x-1 flex items-center`}>
              <Link href={"/about"}> Our Company </Link>
              <IoIosArrowDown />
            </div>
            {open && (
              <div
                className={`absolute ${
                  theme === "light" ? " shadow-custom-shadow shadow-gray" : ""
                } shadow-2xl top-10 bg-white w-[350px] h-16 rounded-md ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 px-2 py-1.5 gap-y-4 text-black w-full">
                  <Link href={"/about"}>
                    <div className="flex hover:bg-black rounded-lg py-3 px-6 w-[170px] items-center hover:text-white justify-start gap-x-3 text-lg">
                      <HiUsers /> About
                    </div>
                  </Link>
                  <Link href={"/careers"}>
                    <div className="flex hover:bg-black py-3 rounded-lg px-6 w-[170px] items-center hover:text-white justify-start gap-x-3 text-lg">
                      <FaLaptop /> Careers
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
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
          className={`transition-all duration-700 ease-linear absolute space-y-4 z-10 top-1 shadow-2xl bg-white w-[80%] h-full px-10 py-10 ${
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
            <div>
              <Link href={"/"}>Home</Link>
            </div>
            <div>
              <Link href={"/services"}>Services</Link>
            </div>
            <div>
              {" "}
              <Link href={"/portfolio"}>Portfolio</Link>
            </div>
            <div>
              {" "}
              <Link href={"/contact"}> Contact Us </Link>
            </div>
            <div>
              <Link href={"/courses"}>Courses</Link>
            </div>
            <div>
              <Link href={"/careers"}>Careers</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

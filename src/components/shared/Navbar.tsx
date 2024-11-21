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

export default function Navbar() {
  const { theme} = useMyContext();
  const [hamburState, setHamburState] = useState(false);
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white shadow-2xl "
          : "bg-black shadow-custom-shadow shadow-gray"
      }  absolute mt-4 z-20 left-0 right-0 top-0 rounded-full w-[96%] max-w-[1255px] mx-auto flex items-center justify-between px-4 py-2`}
    >
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image
            src={theme === "light" ? IMAGES.LOGO : IMAGES.LOGOW}
            width={230}
            height={160}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex-1 hidden relative  lg:flex items-center justify-between ">
        <div
          className={`flex items-center xl:px-12 lg:px-5 justify-center font-custom ${
            theme === "light" ? "text-black" : "text-white"
          } font-medium text-xl xl:space-x-7 lg:space-x-6`}
        >
          <div className="group relative flex justify-between items-center">
            <Link href={"/services"}>Services</Link>
            <IoIosArrowDown />
            <div className="hidden absolute top-10 group-hover:block bg-white w-[500px] h-40 rounded-md">
              <div className="grid grid-cols-2 p-8 space-y-3 text-black">
                <div>NFT Development</div>
                <div>Smart Contract</div>
                <div>DEFI</div>
                <div>DAPP</div>
                <div>DEX</div>
                <div>Exchange Wallets</div>
              </div>
            </div>
          </div>
          <div>
            <Link href={"/portfolio"}>Portfolio</Link>
          </div>
          <div className="flex justify-between items-center">
            Products
            <IoIosArrowDown />
          </div>
          <div className="flex  justify-between items-center">
            Discover
            <IoIosArrowDown />
          </div>
          <div className="flex justify-between items-center">
            <Link href={"/about"}> Our Company </Link>
            <IoIosArrowDown />
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
          className={`${ theme === "light" ? "text-black" : "text-primary" } text-3xl`}
          onClick={() => setHamburState(true)}
        />
      </div>
      {hamburState && (
        <div
          className={`transition-transform ease-in-out duration-500 absolute space-y-4 z-10 top-1 shadow-2xl bg-white w-[80%] h-auto px-10 py-10 ${
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
            <div>Blog</div>
            <div>Careers</div>
          </div>
        </div>
      )}
    </div>
  );
}

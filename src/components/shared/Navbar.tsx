import Image from "next/image";
import React from "react";
import { IMAGES } from "../../../public/images";
import Button from "../template/button/Button";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-white shadow-2xl absolute mt-4 z-10 left-0 right-0 top-0 rounded-full w-full max-w-[1255px] mx-auto flex items-center justify-between px-4 py-2">
      <div className="w-[25%]">
        <Image src={IMAGES.LOGO} width={230} height={160} alt="Logo" />
      </div>
      <div className="w-[55%] text-black font-medium text-xl flex items-center justify-between space-x-3">
        <div className="group relative flex justify-between items-center">
          Services
          <IoIosArrowDown />
          <div className="hidden absolute top-10 group-hover:block bg-white w-[500px] h-40 rounded-md">
            <div className="grid grid-cols-2 p-8 space-y-3">
              <div>NFT Development</div>
              <div>Smart Contract</div>
              <div>DEFI</div>
              <div>DAPP</div>
              <div>DEX</div>
              <div>Exchange Wallets</div>
            </div>
          </div>
        </div>
        <div>Portfolio</div>
        <div className="flex justify-between items-center">
          Products
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between items-center">
          Discover
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between items-center">
          Our Company
          <IoIosArrowDown />
        </div>
      </div>
      <div className="w-[25%] flex justify-end">
        <Button bgColor="primary" size="large">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

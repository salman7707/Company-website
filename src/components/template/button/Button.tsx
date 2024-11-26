import { ButtonType } from "@/components/shared/types/templeteTypes/Button";
import React from "react";

export default function Button({
  children,
  rounded = "full",
  bgColor,
  color,
  fontFamily = "font-manrope",
  fontSize = "large",
  HandleClick,
  size,
  border,
  hoverBg,
  hoverText,
  className,
}: ButtonType) {
  const ButtonSizes =
    size === "large"
      ? "px-5 py-2"
      : size === "extralarge"
      ? "px-6 py-3"
      : size === "extrasmall"
      ? "py-1 px-2"
      : "px-3 py-2";
  const fontClasses =
    fontSize === "large"
      ? "text-xl font-medium"
      : fontSize === "extralarge"
      ? "text-[24px] font-medium"
      : "";
  const BgColorClass =
    bgColor === "primary"
      ? "bg-primary"
      : bgColor === "black"
      ? "bg-black"
      : bgColor === "secondaryPurple"
      ? "bg-secondaryPurple"
      : bgColor === "green"
      ? "bg-green-500"
      : bgColor === "white"
      ? "bg-white"
      : bgColor === "lightgray"
      ? "bg-lightgray"
      : "";
  const ColorClass =
    color === "primary"
      ? "text-primary"
      : color === "black"
      ? "text-black"
      : color === "white"
      ? "text-white"
      : color === "secondaryPurple"
      ? "text-secondaryPurple"
      : "";
  const RoundedClass =
    rounded === "full"
      ? "rounded-full"
      : rounded === "medium"
      ? "rounded-xl"
      : rounded === "normal"
      ? "rounded-lg"
      : "";
  const fontClass =
    fontFamily === "font-manrope"
      ? "font-manrope"
      : fontFamily === "Inter-regular"
      ? "font-Inter"
      : fontFamily === "Inter-medium"
      ? "font-inter-medium"
      : fontFamily === "Inter-bold"
      ? "font-inter-bold"
      : fontFamily === "Poppins-medium"
      ? "font-poppins-medium"
      : fontFamily === "font-custom"
      ? "font-custom"
      : "font-poppins";
  const borderClasses =
    border === "black"
      ? "border-2 border-black"
      : border === "white"
      ? " border-2 border-white"
      : "";
  const hoverBgClass =
    hoverBg === "white"
      ? "hover:bg-white"
      : hoverBg === "black"
      ? "hover:bg-black"
      : hoverBg === "primary"
      ? "hover:bg-primary"
      : hoverBg === "secondaryPurple"
      ? "hover:bg-secondaryPurple"
      : "";
  const hoverTextClass =
    hoverText === "white"
      ? "hover:text-white"
      : hoverText === "black"
      ? "hover:text-black"
      : hoverText === "primary"
      ? "hover:text-primary"
      : hoverText === "secondaryPurple"
      ? "text-secondaryPurple"
      : "";
  return (
    <button
      className={`${ButtonSizes} group ${fontClass} ${borderClasses} ${hoverBgClass} ${hoverTextClass} ${BgColorClass} ${RoundedClass} ${className} ${ColorClass} ${fontClasses}`}
      onClick={HandleClick}
    >
      {children}
    </button>
  );
}

import React from "react";

interface Button {
  children: React.ReactNode;
  bgColor?: string;
  HandleClick?: () => void;
  size?: "large" | "extralarge" | "small" | "extrasmall";
  fontSize?: "large" | "medium" | "small";
  color?: string;
  rounded?: "full" | "medium" | "null" | "normal";
  border?: "black";
  hoverBg?: "white" | "black" | "primary" | "secondaryPurple";
  hoverText?: "white" | "black" | "primary" | "secondaryPurple";
  className?:string;
}

export default function Button({
  children,
  rounded = "full",
  bgColor,
  color,
  fontSize = "large",
  HandleClick,
  size,
  border,
  hoverBg,
  hoverText,
  className,
}: Button) {
  const ButtonSizes =
    size === "large"
      ? "px-5 py-2"
      : size === "extralarge"
      ? "px-6 py-3"
      : size === "extrasmall" ? "py-1 px-2" : "px-3 py-2";
  const fontClasses = fontSize === "large" ? "text-xl font-medium" : "";
  const BgColorClass =
    bgColor === "primary"
      ? "bg-primary"
      : bgColor === "black"
      ? "bg-black"
      : bgColor === "secondaryPurple" ? "bg-secondaryPurple" : bgColor === "green" ? "bg-green-500" : "";
  const ColorClass =
    color === "primary"
      ? "text-primary"
      : color === "black"
      ? "text-black"
      : color === "white" ? "text-white" : color === "secondaryPurple" ? "text-secondaryPurple": "";
  const RoundedClass =
    rounded === "full"
      ? "rounded-full"
      : rounded === "medium"
      ? "rounded-xl"
      : rounded === "normal"
      ? "rounded-lg"
      : "";
  const borderClasses = border === "black" ? "border-2 border-black" : "";
  const hoverBgClass =
    hoverBg === "white"
      ? "hover:bg-white"
      : hoverBg === "black"
      ? "hover:bg-black"
      : hoverBg === "primary"
      ? "hover:bg-primary"
      : hoverBg === "secondaryPurple" ? "hover:bg-secondaryPurple" : "";
  const hoverTextClass =
    hoverText === "white"
      ? "hover:text-white"
      : hoverText === "black"
      ? "hover:text-black"
      : hoverText === "primary"
      ? "hover:text-primary"
      : hoverText === "secondaryPurple" ? "text-secondaryPurple" : "";
  return (
    <button
      className={`${ButtonSizes} ${borderClasses} ${hoverBgClass} ${hoverTextClass} ${BgColorClass} ${RoundedClass} ${className} ${ColorClass} ${fontClasses}`}
      onClick={HandleClick}
    >
      {children}
    </button>
  );
}

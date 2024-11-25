import React from "react";

interface textpage {
  children: React.ReactNode;
  fontFamily?:
    | "font-custom"
    | "font-manrope"
    | "Inter-regular"
    | "Inter-medium"
    | "Inter-bold"
    | "Poppins-medium"
    | "Poppins-regular";
  smallScreenFont?: string;
  mdScreenFont?: string;
  color?: "primary" | "secondary" | "white" | "gray" | "black" | "medgray";
  fontSize?: "16" | "18" | "20" | "24" | "26" | "28";
  textAlign?: "left" | "center" | "right";
  paddingTop?: string;
  paddingBottom?: string;
  weight?: "bold" | "semibold" | "medium" | "normal" | "light";
  leading?: "custom";
}

export default function HeadingMedium({
  children,
  fontFamily = "font-manrope",
  color = "secondary",
  fontSize = "20",
  textAlign = "left",
  paddingTop,
  paddingBottom,
  smallScreenFont,
  mdScreenFont,
  weight = "bold",
  leading,
}: textpage) {
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
  const sizeClass =
    fontSize === "16"
      ? "lg:text-base"
      : fontSize === "18"
      ? "lg:text-lg"
      : fontSize === "26"
      ? "lg:text-[26px]"
      : fontSize === "24"
      ? "lg:text-[24px]"
      : fontSize === "28"
      ? "lg:text-[28px]"
      : "lg:text-xl";
  const weightClasses =
    weight === "bold"
      ? "font-bold"
      : weight === "medium"
      ? "font-medium"
      : weight === "normal"
      ? "font-normal"
      : weight === "light"
      ? "font-light"
      : "font-semibold";
  const paddingTopClass = paddingTop ? `pt-[${paddingTop}]` : "";
  const paddingBottomClass = paddingBottom ? `pb-[${paddingBottom}]` : "";
  const leadingClasses =
    leading === "custom" ? "leading-[1.3]" : "leading-none";
  const ColorClasses =
    color === "primary"
      ? "text-primary"
      : color === "white"
      ? "text-white"
      : color === "gray"
      ? "text-gray"
      : color === "black"
      ? "text-black"
      : color === "medgray"
      ? "text-medGray"
      : "text-secondary";
  const smallScreenFontClass =
    smallScreenFont === "36"
      ? "text-[36px]"
      : smallScreenFont === "30"
      ? "text-[30px]"
      : smallScreenFont === "46"
      ? "text-[46px]"
      : smallScreenFont === "14" ? "text-[14px]" 
      : smallScreenFont === "24"? "text-[24px]" :  "";
  const mdScreenFontClass =
    mdScreenFont === "64"
      ? "md:text-[64px]"
      : mdScreenFont === "48"
      ? "md:text-[48px] "
      : "";
  return (
    <h1
      className={`${smallScreenFontClass} ${mdScreenFontClass} ${fontClass} ${ColorClasses} ${paddingTopClass} ${paddingBottomClass} text-${textAlign} ${sizeClass} ${weightClasses} ${leadingClasses}`}
    >
      {children}
    </h1>
  );
}

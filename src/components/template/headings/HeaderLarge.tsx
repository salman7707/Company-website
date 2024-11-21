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
  color?: "primary" | "secondary" | "black" | "white";
  fontSize?: string;
  textAlign?: string;
  paddingTop?: string;
  paddingBottom?: string;
  smallScreenFont?:string;
  mdScreenFont?:string;
  weight?: "bold" | "semibold" | "medium" | "normal";
  leading?: "custom";
  theme?:"light"| "dark";
}

export default function HeadingLarge({
  children,
  fontFamily = "font-manrope",
  color = "white",
  fontSize = "35",
  textAlign,
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
    fontSize === "25"
      ? "lg:text-xl"
      : fontSize === "28"
      ? "lg:text-2xl"
      : fontSize === "35"
      ? "lg:text-3xl"
      : fontSize === "36"
      ? "lg:text-[36px]"
      : fontSize === "40"
      ? "lg:text-[40px]"
      : fontSize === "64"
      ? "lg:text-[64px]"
      :  fontSize === "48" ? "lg:text-[48px]" : "";
  const weightClasses =
    weight === "bold"
      ? "font-bold"
      : weight === "medium"
      ? "font-medium"
      : weight === "normal" ? "font-normal" : "font-semibold";
  const paddingTopClass = paddingTop ? `pt-[${paddingTop}]` : "";
  const paddingBottomClass = paddingBottom ? `pb-[${paddingBottom}]` : "";
  const leadingClasses =
    leading === "custom" ? "leading-[1.3]" : "leading-none";
  const ColorClasses =
    color === "primary"
      ? "text-primary"
      : color === "black"
      ? "text-black"
      : color === "white"
      ? "text-white"
      : "text-secondary";
      const smallScreenFontClass = smallScreenFont === "36" ? "text-[36px]" : smallScreenFont === "30" ?  "text-[30px]": smallScreenFont === "46" ? "text-[46px]" : ""
      const mdScreenFontClass = mdScreenFont === "64" ? "md:text-[64px]" : mdScreenFont === "48" ? "md:text-[48px] " : ""
  return (
    <h1
      className={`${smallScreenFontClass} ${mdScreenFontClass} ${fontClass} ${ColorClasses} ${paddingTopClass} ${paddingBottomClass} ${textAlign} ${sizeClass} ${weightClasses} ${leadingClasses}`}
    >
      {children}
    </h1>
  );
}

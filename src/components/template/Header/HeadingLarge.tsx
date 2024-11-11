import React from "react";

interface textpage {
  children: React.ReactNode;
  fontFamily?:
    | "font-manrope"
    | "Inter-regular"
    | "Inter-medium"
    | "Inter-bold"
    | "Poppins-medium"
    | "Poppins-regular";
  color?: "primary"|"secondary"|"black";
  fontSize: "25" | "28" | "35" | "regular" | "40";
  textAlign?: "left" | "center" | "right";
  paddingTop?: string;
  paddingBottom?: string;
  weight?: "bold" | "semibold" | "medium";
  leading?: "custom";
}

export default function HeadingLarge({
  children,
  fontFamily = "font-manrope",
  color = "primary",
  fontSize = "35",
  textAlign = "left",
  paddingTop,
  paddingBottom,
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
      : "font-poppins";
  const sizeClass =
    fontSize === "25"
      ? "text-xl"
      : fontSize === "28"
      ? "text-2xl"
      : fontSize === "35"
      ? "text-3xl"
      : fontSize === "40" ? "text-[40px]" :   "text-6xl";
  const weightClasses =
    weight === "bold"
      ? "font-bold"
      : weight === "medium"
      ? "font-medium"
      : "font-semibold";
  const paddingTopClass = paddingTop ? `pt-[${paddingTop}]` : "";
  const paddingBottomClass = paddingBottom ? `pb-[${paddingBottom}]` : "";
  const leadingClasses =
    leading === "custom" ? "leading-[1.3]" : "leading-none";
  const ColorClasses = color === "primary" ? "text-primary" : color === "black"? "text-black": "text-secondary";
  return (
    <h1
      className={`${fontClass} ${ColorClasses} ${paddingTopClass} ${paddingBottomClass} text-${textAlign} ${sizeClass} ${weightClasses} ${leadingClasses}`}
    >
      {children}
    </h1>
  );
}

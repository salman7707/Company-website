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
  color?: "primary" | "secondary";
  fontSize?: "16" | "18" | "20";
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
    fontSize === "16" ? "text-base" : fontSize === "18" ? "text-lg" : "text-xl";
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
  const ColorClasses= color === "primary" ? "text-primary": "text-secondary"
  return (
    <h1
      className={`${fontClass} text-secondary ${ColorClasses} ${paddingTopClass} ${paddingBottomClass} text-${textAlign} ${sizeClass} ${weightClasses} ${leadingClasses}`}
    >
      {children}
    </h1>
  );
}

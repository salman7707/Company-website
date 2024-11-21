import React from "react";

interface heading {
  children: React.ReactNode;
  fontSize?: "extrasmall" | "small" | "medium" | "large" | "extralarge" | "24";
  color?: string;
  fontFamily?:
    | "font-custom"
    | "font-manrope"
    | "Inter-regular"
    | "Inter-medium"
    | "Inter-bold"
    | "Poppins-medium"
    | "Poppins-regular";
  textAlign?: string;
  weight?: "bold" | "semibold" | "medium" | "normal" | "light";
  marginTop?: string;
  marginBottom?: string;
}

export default function Paragraph({
  children,
  fontSize = "medium",
  color,
  fontFamily = "font-manrope",
  weight,
  marginTop,
  marginBottom,
  textAlign,
}: heading) {
  const fontSizeClasses =
    fontSize === "small"
      ? "text-sm"
      : fontSize === "extrasmall"
      ? "text-xs"
      : fontSize === "medium"
      ? "text-base"
      : fontSize === "large"
      ? "text-lg"
      : fontSize === "24"
      ? "text-[24px]"
      : "text-xl";
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
  const ColorClasses =
    color === "primary"
      ? "text-primary"
      : color === "black"
      ? "text-black"
      : color === "white"
      ? "text-white"
      : color === "gray"
      ? "text-gray"
      : "text-secondary";
  return (
    <p
      className={` ${textAlign} ${fontClass} ${fontSizeClasses} mt-${marginTop} mb-${marginBottom} ${ColorClasses} ${weightClasses}`}
    >
      {children}
    </p>
  );
}

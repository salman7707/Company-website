import React from "react";

interface heading {
  children: React.ReactNode;
  fontSize?: "small" | "medium" | "large" | "extralarge";
  color?: string;
  fontFamily?:
    | "font-manrope"
    | "Inter-regular"
    | "Inter-medium"
    | "Inter-bold"
    | "Poppins-medium"
    | "Poppins-regular";
  weight?: "bold" | "semibold" | "medium" | "normal" | "light";
  marginTop?: string;
  marginBottom?: string;
  textAlign?: "left" | "center" | "right";
}

export default function Paragraph({
  children,
  fontSize = "medium",
  color = "var(--black)",
  fontFamily = "font-manrope",
  weight,
  marginTop,
  marginBottom,
  textAlign = "left",
}: heading) {
  const fontSizeClasses =
    fontSize === "small"
      ? "text-sm"
      : fontSize === "medium"
      ? "text-base"
      : fontSize === "large" ? "text-lg" : "text-xl";
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
  const textAlignClasses =
    textAlign === "center"
      ? "text-center"
      : textAlign === "left"
      ? "text-left"
      : "text-right";
  return (
    <p
      className={` ${textAlignClasses} ${fontClass} ${fontSizeClasses} mt-${marginTop} mb-${marginBottom} text-${color} ${weightClasses}`}
    >
      {children}
    </p>
  );
}

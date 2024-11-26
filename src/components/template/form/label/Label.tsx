import { LabelDataType } from "@/components/shared/types/templeteTypes/Label";
import React from "react";

export default function Label({
  children,
  fontSize,
  weight,
  color,
  fontFamily,
}: LabelDataType) {
  const fontSizeClass =
    fontSize === "small"
      ? "text-base"
      : fontSize === "medium"
      ? "text-lg"
      : fontSize === "large"
      ? "font-xl"
      : "";
  const ColorClasses =
    color === "primary"
      ? "text-primary"
      : color === "black"
      ? "text-black"
      : color === "white"
      ? "text-white"
      : "text-secondary";
  const weightClasses =
    weight === "bold"
      ? "font-bold"
      : weight === "medium"
      ? "font-medium"
      : weight === "normal"
      ? "font-normal"
      : "font-semibold";

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

  return (
    <label
      className={` ${fontClass} ${fontSizeClass} ${ColorClasses} ${weightClasses}`}
    >
      {children}
    </label>
  );
}

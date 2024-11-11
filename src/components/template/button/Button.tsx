import React from "react";

interface Button {
    children : React.ReactNode;
    BgColor?: string;
    HandleClick?: () => void;
    size?: "large" | "medium" | "small";
    fontSize?: "large" | "medium" | "small"
    Color?:string;
    Rounded?:"rounded-full"|"rounded-medium"|"rounded-null"
}

export default function Button({ children, Rounded="rounded-full", BgColor,Color, fontSize="large", HandleClick,size }:Button) {
    const ButtonSizes = size === "large" ? "px-5 py-2" : size === "medium" ? "px-6 py-4" : "px-4 py-2"
    const fontClasses = fontSize === "large" ? "text-xl font-medium" : ""
    const BgColorClass = BgColor === "primary" ? "bg-primary" : ""
    const RoundedClass  = Rounded === "rounded-full" ? "rounded-full" : Rounded === "rounded-medium" ? "rounded-xl" : ""
  return <button
   className={`${ButtonSizes} ${BgColorClass} rounded-full ${RoundedClass} text-${Color} ${fontClasses}`}
   onClick={HandleClick}
   >
    {children}
  </button>;
}

"use client";
import { InputDataType } from "@/components/shared/types/templeteTypes/InputField";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function Input({
  type,
  placeholder,
  value,
  width,
  className,
  id,
  onchange,
}: InputDataType) {
  const widthClass = width === "full" ? "w-full" : "";
  const { theme } = useMyContext();
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onchange}
      onFocus={(e) => e.target.classList.add("border", "border-blue-400")}
      onBlur={(e) => e.target.classList.remove("border", "border-blue-400")}
      className={` ${className} ${widthClass} py-3 px-3 rounded-lg border ${
        theme === "light" ? "bg-white" : "bg-medGray"
      } ${
        theme === "light" ? "border-0 " : "border-medGray"
      } text-[#989898] outline-0 active:border focus:border-blue-600  font-custom text-lg font-normal`}
    />
  );
}

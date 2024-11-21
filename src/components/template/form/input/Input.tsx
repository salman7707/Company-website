"use client"
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

interface inputdata {
  type?: string;
  placeholder?: string;
  value?: string;
  width?:string;
  onchange?: () => void;
}

export default function Input({
  type,
  placeholder,
  value,
  width,
  onchange,
}: inputdata) {
    const widthClass = width === "full" ? "w-full" : ""
    const {theme} = useMyContext();
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      onFocus={(e) => e.target.classList.add("border", "border-blue-400")}
      onBlur={(e) => e.target.classList.remove("border", "border-blue-400")}
      className={`${widthClass} py-3 px-3 rounded-lg border ${ theme === "light" ? "bg-white" : "bg-medGray" } ${ theme === "light" ? "border-white": "border-medGray" } border-white text-[#989898] outline-0 active:border focus:border-blue-600  font-custom text-lg font-normal`}
    />
  );
}

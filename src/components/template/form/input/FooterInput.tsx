import React from "react";

interface inputdata {
  type?: string;
  placeholder?: string;
  value?: string;
  width?: string;
  onchange?: () => void;
}

export default function FooterInput({
  type,
  placeholder,
  value,
  width,
  onchange,
}: inputdata) {
  const widthClass = width === "full" ? "w-full" : "";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      className={`${widthClass} py-3 px-3 border-0 rounded-lg text-[#989898] outline-0 font-custom text-lg bg-transparent font-normal`}
    />
  );
}

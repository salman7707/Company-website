import { TextAreaType } from "@/components/shared/types/templeteTypes/TextArea";
import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

export default function TextArea({
  className,
  rows,
  value,
  placeholder,
}: TextAreaType) {
  const { theme } = useMyContext();
  return (
    <textarea
      rows={rows}
      className={`${className} rounded-xl px-4 py-3 ${
        theme === "light" ? "bg-white" : "bg-medGray"
      } `}
      value={value}
      placeholder={placeholder}
    />
  );
}

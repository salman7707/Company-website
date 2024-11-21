import { useMyContext } from "@/contexts/MyContexts";
import React from "react";

interface textarea {
  rows?:number;
  value?:string;
  placeholder?:string
}

export default function TextArea({ rows,value,placeholder }: textarea) {
  const {theme} =useMyContext();
  return <textarea rows={rows} className={`rounded-xl px-4 py-3 ${ theme === "light" ? "bg-white" : "bg-medGray" } `} value={value} placeholder={placeholder}/>;
}

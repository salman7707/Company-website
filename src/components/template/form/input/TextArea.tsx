import React from "react";

interface textarea {
  rows?:number;
  value?:string;
  placeholder?:string
}

export default function TextArea({ rows,value,placeholder }: textarea) {
  return <textarea rows={rows} className="rounded-xl px-4 py-3" value={value} placeholder={placeholder}/>;
}

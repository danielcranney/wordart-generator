"use client";
import React from "react"; // { useState }
import Link from "next/link";
import { updateAscii } from "@/app/actions/updateAscii";

export const AsciiForm = () => {
  
  return (
    <form action={updateAscii}>
      {/* <input
            className="bg-white border border-neutral-200 rounded-md p-2 flex h-12 focus:outline-none focus:border-neutral-500 transition-all duration-150 ease-in-out w-2/3 placeholder:text-neutral-300"
            value={customText}
            placeholder="Type here to see a live preview"
            onChange={(e) => setCustomText(e.target.value)}
          /> */}
      <button className="bg-neutral-900 flex p-2">Testing</button>
    </form>
  );
};

"use client";
import React, { useState } from "react";
import Link from "next/link";

const styleOptions = [
  { title: "Rainbow", className: "rainbow" },
  { title: "Blues", className: "blues" },
  { title: "Superhero", className: "superhero" },
  { title: "Radial", className: "radial" },
  { title: "Tilt", className: "tilt" },
  { title: "Purple", className: "purple" },
  { title: "Horizon", className: "horizon" },
  { title: "Italic Outline", className: "italic-outline" },
  { title: "Slate", className: "slate" },
];

export const WordArtGenerator = () => {
  const [artStyle, setArtStyle] = useState("rainbow");
  const [customText, setCustomText] = useState("Word Art");
  return (
    <>
      <div className="w-full flex flex-col gap-2 pt-5">
        <p className="text-lg font-bold">Style</p>
        <div className="flex gap-x-2 items-center pb-5">
          {styleOptions.map((style, index) => {
            return (
              <button
                key={style.className + index + index}
                onClick={() => setArtStyle(style.className)}
                className={`flex rounded-full px-2 py-1 text-sm ${
                  artStyle === style.className
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200 text-neutral-800"
                }`}
              >
                {style.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white flex flex-col w-full py-5 justify-center gap-2">
        <h3 className="text-lg font-semibold">Text to Display</h3>

        <input
          className="bg-white border border-neutral-200 rounded-md p-2 flex h-12 focus:outline-none focus:border-neutral-500 transition-all duration-150 ease-in-out w-2/3 placeholder:text-neutral-300"
          value={customText}
          placeholder="Type here to see a live preview"
          onChange={(e) => setCustomText(e.target.value)}
        />
      </div>

      <div className="bg-neutral-100 flex w-full h-full p-8 relative items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-200 text-sm uppercase font-medium tracking-wide px-3 py-1.5 rounded-bl-md rounded-br-md text-neutral-900">
          Live Preview
        </div>
        <div className={`wordart ${artStyle}`}>
          <span className="text">{customText}</span>
        </div>
      </div>
    </>
  );
};

"use client";
import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { styleOptions } from "@/lib/styleOptions";
import { DownloadIcon } from "./DownloadIcon";
import { ColorHubAd } from "./ColorHubAd";
import { Modal } from "./Modal";

export const WordArtGenerator = () => {
  const [artStyle, setArtStyle] = useState("rainbow");
  const [customText, setCustomText] = useState("Word Art");
  const [showModal, setShowModal] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const downloadImage = () => {
    if (!elementRef.current) return; // Check if elementRef.current is null

    toPng(elementRef.current, {
      skipAutoScale: true,
      cacheBust: false,
      backgroundColor: "white",
      canvasWidth: 1920,
      canvasHeight: 1080,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-wordart.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="page-container">
      {showModal && <Modal toggleModal={toggleModal} />}

      <article className="bg-white w-full flex flex-col gap-y-2 p-8 rounded-xl col-span-1">
        <h3 className="text-lg">Styles</h3>
        <div className="flex flex-wrap gap-2">
          {styleOptions.map((style, index) => {
            return (
              <button
                key={style.className + index + index}
                onClick={() => setArtStyle(style.className)}
                className={`flex rounded-md px-2.5 py-1.5 text-sm font-bold ${
                  artStyle === style.className
                    ? "bg-slate-300 border border-slate-400 text-slate-900"
                    : "bg-slate-100 border border-slate-300 text-slate-600"
                }`}
              >
                {style.title}
              </button>
            );
          })}
        </div>

        {/* Ad */}
        <ColorHubAd />
      </article>

      <article className="flex flex-col gap-y-4 p-8 bg-white rounded-xl col-span-2">
        <h3 className="text-lg">Text to Display</h3>
        <input
          value={customText}
          placeholder="Type here to see a live preview"
          onChange={(e) => setCustomText(e.target.value)}
        />

        <div ref={elementRef} className="preview-box">
          <div className={`wordart ${artStyle}`}>
            <span className="text">{customText}</span>
          </div>
        </div>

        <div className="flex w-full">
          <button
            onClick={() => {
              downloadImage();
              toggleModal();
            }}
            className="accent-button"
          >
            <DownloadIcon />
            Download WordArt
          </button>
        </div>
      </article>
    </section>
  );
};

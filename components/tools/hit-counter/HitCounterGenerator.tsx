"use client";
import React, { useState } from "react";
import Link from "next/link";

// @ts-ignore
import RetroHitCounter from "react-retro-hit-counter";

export const HitCounterGenerator = () => {
  // State variables to hold the values
  const [hits, setHits] = useState<number>(1337);
  const [withBorder, setWithBorder] = useState<boolean>(true);
  const [withGlow, setWithGlow] = useState<boolean>(false);
  const [minLength, setMinLength] = useState<number>(4);
  const [size, setSize] = useState<number>(40);
  const [padding, setPadding] = useState<number>(4);
  const [digitSpacing, setDigitSpacing] = useState<number>(3);
  const [segmentThickness, setSegmentThickness] = useState<number>(4);
  const [segmentSpacing, setSegmentSpacing] = useState<number>(0.5);
  const [segmentActiveColor, setSegmentActiveColor] =
    useState<string>("#76FF03");
  const [segmentInactiveColor, setSegmentInactiveColor] =
    useState<string>("#315324");
  const [backgroundColor, setBackgroundColor] = useState<string>("#222222");
  const [borderThickness, setBorderThickness] = useState<number>(7);
  const [glowStrength, setGlowStrength] = useState<number>(0.5);

  return (
    <>
      <div className="mt-4 grid grid-cols-3 bg-white w-full py-5 justify-center gap-2">
        <form className="col-span-1 grid grid-cols-1 border border-neutral-200 gap-px rounded-md overflow-hidden bg-neutral-200">
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Hits:</span>
            <input
              type="number"
              value={hits}
              onChange={(e) => setHits(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">With Border:</span>
            <input
              type="checkbox"
              checked={withBorder}
              onChange={(e) => setWithBorder(e.target.checked)}
              className="w-1/2"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">With Glow:</span>
            <input
              type="checkbox"
              checked={withGlow}
              onChange={(e) => setWithGlow(e.target.checked)}
              className="w-1/2"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Min Length:</span>
            <input
              type="number"
              value={minLength}
              onChange={(e) => setMinLength(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Size:</span>
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Padding:</span>
            <input
              type="number"
              value={padding}
              onChange={(e) => setPadding(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Digit Spacing:</span>
            <input
              type="number"
              value={digitSpacing}
              onChange={(e) => setDigitSpacing(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Segment Thickness:</span>
            <input
              type="number"
              value={segmentThickness}
              onChange={(e) => setSegmentThickness(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Segment Spacing:</span>
            <input
              type="number"
              value={segmentSpacing}
              onChange={(e) => setSegmentSpacing(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Segment Active Color:</span>
            <input
              type="color"
              value={segmentActiveColor}
              onChange={(e) => setSegmentActiveColor(e.target.value)}
              className=""
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">
              Segment Inactive Color:
            </span>
            <input
              type="color"
              value={segmentInactiveColor}
              onChange={(e) => setSegmentInactiveColor(e.target.value)}
              className=""
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Background Color:</span>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className=""
            />
          </label>
          <label className="flex justify-between bg-white p-2">
            <span className="text-sm font-semibold">Border Thickness:</span>
            <input
              type="number"
              value={borderThickness}
              onChange={(e) => setBorderThickness(parseFloat(e.target.value))}
              className="w-1/2 input-field"
            />
          </label>
        </form>

        <div className="col-span-2 bg-neutral-100 flex w-full h-full p-8 relative items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-200 text-sm uppercase font-medium tracking-wide px-3 py-1.5 rounded-bl-md rounded-br-md text-neutral-900">
            Live Preview
          </div>

          <RetroHitCounter
            hits={hits}
            /* The following are all default values: */
            withBorder={withBorder}
            withGlow={withGlow}
            minLength={minLength}
            size={size}
            padding={padding}
            digitSpacing={digitSpacing}
            segmentThickness={segmentThickness}
            segmentSpacing={segmentSpacing}
            segmentActiveColor={segmentActiveColor}
            segmentInactiveColor={segmentInactiveColor}
            backgroundColor={backgroundColor}
            borderThickness={borderThickness}
            glowStrength={glowStrength}
          />
        </div>
      </div>
    </>
  );
};

"use client";
import React from "react";
import Link from "next/link";

export const PageHeader = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-sm uppercase tracking-wide font-semibold">002</p>
      <h3 className="text-6xl font-bold">{text}</h3>
    </div>
  );
};

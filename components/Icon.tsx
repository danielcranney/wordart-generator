"use client";

import React from "react";

export const Icon = ({
  slug,
  color,
  href,
  text,
}: {
  slug: string;
  color: string;
  href: string;
  text?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-x-2 transition-all duration-150 ease-in-out opacity-60 hover:opacity-100 text-white hover:text-white"
    >
      <img
        height="20"
        width="20"
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
      />
      <span className="hidden lg:flex">{text ? text : null}</span>
    </a>
  );
};

"use client";
import React from "react";
import Link from "next/link";

export const SidebarNavigationItem = ({
  route,
  text,
  icon,
}: {
  route: string;
  text: string;
  icon: any;
}) => {
  return (
    <li>
      <Link href={"/tools/" + route}>
        {icon}
        {text}
      </Link>
    </li>
  );
};

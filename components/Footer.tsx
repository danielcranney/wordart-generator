import React from "react";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex py-1 items-center justify-evenly">
        <h3 className="site-title blues text-3xl">
          <span className="text">WordArt Generator</span>
        </h3>

        <div className="flex gap-x-3 ml-auto">
          <Icon
            href={"http://www.github.com/danielcranney/wordart-generator"}
            slug="github"
            color={"ffffff"}
          />
          <Icon
            href={"http://www.x.com/danielcranney"}
            slug="x"
            color={"ffffff"}
          />
          <p className="flex items-center text-white font-semibold">
            &copy; {new Date().getFullYear()} &nbsp;
            <span className="hidden lg:flex">Daniel Cranney</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

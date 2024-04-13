import React from "react";
import { Icon } from "./Icon";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex py-1 items-center">
        <h3 className="site-title blues text-3xl">
          <span className="text">WordArt Generator</span>
        </h3>

        <div className="flex gap-x-5 ml-auto">
          <Icon
            href={"http://www.github.com/danielcranney/wordart-generator"}
            slug="github"
            color={"ffffff"}
            text={"View on GitHub"}
          />
          <Icon
            href={"http://www.x.com/danielcranney"}
            slug="x"
            color={"ffffff"}
            text={"Follow me on X"}
          />
        </div>
      </div>
    </header>
  );
};

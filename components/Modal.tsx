import Image from "next/image";
import React from "react";
import { GitHubLogo } from "./GitHubLogo";

export const Modal = ({ toggleModal }: { toggleModal: any }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="absolute right-8 top-8 font-bold text-sm bg-slate-100 rounded-md px-3 py-2 text-slate-800 hover:bg-slate-200 hover:text-slate-900 transition-all duration-150 ease-in-out"
          onClick={toggleModal}
        >
          Close
        </button>

        <h3 className="text-3xl">WordArt Generated</h3>
        <div className="flex flex-col gap-y-2 text-center">
          <p>
            Your WordArt has been generated and your download should have
            started.
          </p>
          <p>
            Found an issue?{" "}
            <a href="mailto:hello@danielcranney.com" className="underline">
              Get in touch
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/danielcranney/wordart-generator/issues"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              create an issue
            </a>{" "}
            on GitHub
          </p>
        </div>
        <hr className="w-3/4 h-px bg-slate-200 border-0" />

        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-[#24c0fd] rounded-full overflow-hidden shrink-0">
            <Image
              src={"/headshot.png"}
              width={1100}
              height={1100}
              alt={"Daniel Cranney headshot"}
              className="shrink-0"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-center">
              Hi! My name&apos;s Daniel Cranney and I build web tools. <br />
              Please consider{" "}
              <a
                href="https://github.com/sponsors/danielcranney"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                sponsoring me
              </a>{" "}
              or{" "}
              <a
                href="https://buymeacoffee.com/danielcranney"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                buying me a coffee
              </a>{" "}
              to support my work.
            </p>
            <div className="flex gap-x-3 items-center mx-auto">
              <a
                href="https://github.com/sponsors/danielcranney"
                rel="noreferrer"
                target="_blank"
                className="accent-button text-sm"
              >
                <GitHubLogo />
                Sponsor me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

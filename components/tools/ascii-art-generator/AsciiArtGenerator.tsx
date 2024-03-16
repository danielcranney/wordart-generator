import { updateAscii } from "@/app/actions/updateAscii";
import { AsciiForm } from "./form/AsciiForm";

export default async function AsciiArtGenerator({
  customArt,
}: {
  customArt: string;
}) {
  console.log("Custom Art is now: ", customArt);

  return (
    <>
      <div className="bg-white flex flex-col w-full py-5 justify-center gap-2">
        <h3 className="text-lg font-semibold">Text to Display</h3>

        <AsciiForm />
      </div>

      <div className="bg-neutral-100 flex w-full h-full p-8 relative items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-neutral-200 text-sm uppercase font-medium tracking-wide px-3 py-1.5 rounded-bl-md rounded-br-md text-neutral-900">
          Live Preview
        </div>

        <pre>{customArt}</pre>
      </div>
    </>
  );
}

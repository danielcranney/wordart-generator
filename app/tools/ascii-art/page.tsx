import { PageHeader } from "@/components/PageHeader";
import AsciiArtGenerator from "@/components/tools/ascii-art-generator/AsciiArtGenerator";

export default function AsciiArt() {
  return (
    <>
      <PageHeader text={"ASCII Art Generator"} />

      <AsciiArtGenerator />
    </>
  );
}

import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { WordArtGenerator } from "@/components/tools/word-art-generator/WordArtGenerator";

export default function WordArt() {
  return (
    <>
      <PageHeader text={"Word Art Generator"} />

      <WordArtGenerator />
    </>
  );
}

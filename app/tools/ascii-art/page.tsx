import { PageHeader } from "@/components/PageHeader";
import AsciiArtGenerator from "@/components/tools/ascii-art-generator/AsciiArtGenerator";

async function getArt() {
  const res = await fetch(
    "https://asciified.thelicato.io/api/v2/ascii?text=Hello+world"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function AsciiArt() {
  const customArt = await getArt();

  return (
    <>
      <PageHeader text={"ASCII Art Generator"} />

      <AsciiArtGenerator customArt={customArt} />
    </>
  );
}

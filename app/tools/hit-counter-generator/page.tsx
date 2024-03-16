import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { HitCounterGenerator } from "@/components/tools/hit-counter/HitCounterGenerator";

export default function HitCounter() {
  return (
    <>
      <PageHeader text={"Hit Counter"} />

      <HitCounterGenerator />
    </>
  );
}

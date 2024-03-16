"use server";

import { revalidatePath } from "next/cache";

export async function updateAscii(formData: FormData) {
  "use server";

  // You could mutate formData in here, or post to a database.
  formData.get("customAsciiText"),
    async function getArt() {
      const res = await fetch(
        "https://asciified.thelicato.io/api/v2/ascii?text=Testing",
        { cache: "no-store" }
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      console.log("RES IS: ", res);
      return res.text();
    };

  // Revalidate the cache
  revalidatePath("/tools/ascii-art");
}

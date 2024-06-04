"use client";

import { AreaStatus } from "@/lib/AreaStatus";
import { writeIDB } from "@/lib/IndexedDB/writeIDB";

const inputId = "image-upload";

export default function Upload() {
  return (
    <>
      <label htmlFor={inputId}>Submeta as fotos</label>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        multiple
        onChange={async (e) => {
          if (!e.target.files) return;

          await writeIDB(
            Array.from(e.target.files).map((file) => ({
              name: file.name,
              img: file,
              status: AreaStatus.UNDEFINED,
            })),
          );
        }}
      />
    </>
  );
}

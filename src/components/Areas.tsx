"use client";

import { AreaComponent } from "@/components/AreaComponent";
import { useReadIDB } from "@/lib/IndexedDB/useReadIDB";

/**
 * It uses IndexedDB to fetch the areas.
 * Thus, it must not be used with SSR.
 */
export const Areas = () => (
  <>
    {useReadIDB().map((area) => (
      <AreaComponent
        key={area.name}
        area={{
          name: area.name,
          status: area.status,
          imgSrc: URL.createObjectURL(area.img),
        }}
      />
    ))}
  </>
);

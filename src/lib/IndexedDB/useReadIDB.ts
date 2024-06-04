import { AREAS_CACHE_KEY, OBJECT_STORE_NAME } from "@/lib/IndexedDB/constants";
import { openIDB } from "@/lib/IndexedDB/openIDB";
import { Area } from "@/lib/types";
import useSWR from "swr";

async function readIDB() {
  const idb = await openIDB();

  const getAllRequest = idb
    .transaction([OBJECT_STORE_NAME], "readonly")
    .objectStore(OBJECT_STORE_NAME)
    .getAll();

  return new Promise<Area[]>((resolve, reject) => {
    idb.onerror = () => reject(getAllRequest.error);
    getAllRequest.onsuccess = () => resolve(getAllRequest.result as Area[]);
  });
}

export const useReadIDB = () =>
  useSWR(AREAS_CACHE_KEY, readIDB, {
    suspense: true,
  }).data;

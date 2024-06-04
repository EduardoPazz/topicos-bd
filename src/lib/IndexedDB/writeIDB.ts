import { OBJECT_STORE_NAME } from "@/lib/IndexedDB/constants";
import { openIDB } from "@/lib/IndexedDB/openIDB";
import { Area } from "@/lib/types";

export async function writeIDB(areas: Area[]) {
  const idb = await openIDB();

  const transaction = idb.transaction([OBJECT_STORE_NAME], "readwrite");

  return new Promise<void>((resolve, reject) => {
    transaction.onerror = () => reject(transaction.error);

    transaction.oncomplete = () => resolve();

    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    areas.forEach((area) => objectStore.put(area));
  });
}

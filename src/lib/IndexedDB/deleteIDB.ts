import { OBJECT_STORE_NAME } from "@/lib/IndexedDB/constants";
import { openIDB } from "@/lib/IndexedDB/openIDB";

export async function deleteIDB(key: string) {
  const idb = await openIDB();

  const transaction = idb.transaction([OBJECT_STORE_NAME], "readwrite");

  return new Promise<void>((resolve, reject) => {
    transaction.onerror = () => reject(transaction.error);

    transaction.oncomplete = () => resolve();

    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    objectStore.delete(key);
  });
}

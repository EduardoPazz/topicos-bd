import { DB_NAME, OBJECT_STORE_NAME, VERSION } from "@/lib/IndexedDB/constants";

let idbInstance: IDBDatabase;

export const openIDB = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    if (idbInstance) return resolve(idbInstance);

    const openDBRequest = window.indexedDB.open(DB_NAME, VERSION);

    openDBRequest.onerror = () => reject(openDBRequest.error);

    openDBRequest.onupgradeneeded = () =>
      openDBRequest.result.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: "name",
      });

    openDBRequest.onsuccess = () => {
      idbInstance = openDBRequest.result;
      resolve(idbInstance);
    };
  });

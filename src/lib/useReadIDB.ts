import { AreaStatus } from "@/lib/AreaStatus";
import { Area } from "@/lib/types";
import useSWR from "swr";

const OBJECT_STORE_NAME = "topicos-bd-areas";
const DB_NAME = "topicos-bd";
const VERSION = 3;
const AREAS_CACHE_KEY = "areas";

const makePopulateDB = (db: IDBDatabase) => () => {
  const areasObjectStore = db
    .transaction(OBJECT_STORE_NAME, "readwrite")
    .objectStore(OBJECT_STORE_NAME);

  areasObjectStore.add({
    name: "nome-do-arquivo1.jpg",
    status: AreaStatus.GOOD,
    imgSrc: "https://picsum.photos/300/200",
  } as Area);
  areasObjectStore.add({
    name: "nome-do-arquivo2.jpg",
    status: AreaStatus.BAD,
    imgSrc: "https://picsum.photos/300/200",
  } as Area);
  areasObjectStore.add({
    name: "nome-do-arquivo3.jpg",
    status: AreaStatus.UNDEFINED,
    imgSrc: "https://picsum.photos/300/200",
  } as Area);
};

const readIDB = () =>
  new Promise<Area[]>((resolve, reject) => {
    const openDBRequest = window.indexedDB.open(DB_NAME, VERSION);

    openDBRequest.onerror = (event) => {
      console.error("IndexedDB error: ", event);
      reject(event);
    };

    openDBRequest.onupgradeneeded = () => {
      const db = openDBRequest.result;

      const objectStore = db.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: "name",
      });

      objectStore.transaction.oncomplete = makePopulateDB(db);
    };

    openDBRequest.onsuccess = () => {
      const db = openDBRequest.result;

      const getAllRequest = db
        .transaction([OBJECT_STORE_NAME], "readonly")
        .objectStore(OBJECT_STORE_NAME)
        .getAll();

      getAllRequest.onsuccess = () => resolve(getAllRequest.result as Area[]);
    };
  });

export const useReadIDB = () =>
  useSWR(AREAS_CACHE_KEY, readIDB, {
    suspense: true,
  }).data;

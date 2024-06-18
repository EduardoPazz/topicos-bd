import useSWRMutation from "swr/mutation";
import { Area } from "@/lib/types";
import { writeIDB } from "@/lib/IndexedDB/writeIDB";

export const useAnalyzeArea = (area: Area, setArea: (area: Area) => void) =>
  useSWRMutation(`analyzeArea${area.name}`, async () => {
    // const formData = new FormData();
    // formData.set("image", area.img);
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: formData,
    // });
    const newStatus = Math.floor(Math.random() * 3);

    const newArea = { ...area, status: newStatus };

    await writeIDB([newArea]);

    setArea(newArea);
  });

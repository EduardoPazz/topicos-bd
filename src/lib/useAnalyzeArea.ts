import useSWRMutation from "swr/mutation";
import { Area, ImageAnalysisResponse } from "@/lib/types";
import { writeIDB } from "@/lib/IndexedDB/writeIDB";

export const useAnalyzeArea = (area: Area, setArea: (area: Area) => void) =>
  useSWRMutation(`analyzeArea${area.name}`, async () => {
    const body = new FormData();
    body.set("image", area.img);

    const response = await fetch("http://localhost:8080/api/prediction", {
      method: "POST",
      body,
    });

    const analysis = (await response.json()) as ImageAnalysisResponse;

    const newStatus = analysis.predicted_class;

    const newArea = { ...area, status: newStatus };

    await writeIDB([newArea]);

    setArea(newArea);
  });

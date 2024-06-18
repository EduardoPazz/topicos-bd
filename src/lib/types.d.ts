import { ReactComponentLike } from "prop-types";
import { AreaStatus } from "@/lib/AreaStatus";

export interface Area {
  name: string;
  status?: AreaStatus;
  img: File;
}

export interface RouteEntry {
  path: string;
  title: string;
  Icon: ReactComponentLike;
}

export interface ImageAnalysisResponse {
  predicted_class: AreaStatus;
}

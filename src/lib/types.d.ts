import { AreaStatus } from "@/lib/AreaStatus";
import { ReactComponentLike } from "prop-types";

export interface Area {
  name: string;
  status: AreaStatus;
  img: File;
}

export interface AreaDTO {
  name: string;
  status: AreaStatus;
  imgSrc: string;
}

export interface RouteEntry {
  path: string;
  title: string;
  Icon: ReactComponentLike;
}

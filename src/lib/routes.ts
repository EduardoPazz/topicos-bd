import ForestIcon from "@mui/icons-material/Forest";
import ImageIcon from "@mui/icons-material/Image";
import { ReactComponentLike } from "prop-types";

interface RouteEntry {
  path: string;
  title: string;
  Icon: ReactComponentLike;
}

export const ROUTES: RouteEntry[] = [
  { path: "/upload", title: "Upload de imagens", Icon: ImageIcon },
  { path: "/areas", title: "Áreas analisadas", Icon: ForestIcon },
];

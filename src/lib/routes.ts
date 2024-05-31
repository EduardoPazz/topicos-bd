import ForestIcon from "@mui/icons-material/Forest";
import ImageIcon from "@mui/icons-material/Image";
import { ReactComponentLike } from "prop-types";

interface RouteEntry {
  title: string;
  Icon: ReactComponentLike;
}

export const ROUTES = new Map<string, RouteEntry>();

ROUTES.set("/upload", { title: "Upload de imagens", Icon: ImageIcon });
ROUTES.set("/areas", { title: "Áreas analisadas", Icon: ForestIcon });

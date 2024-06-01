import { RouteEntry } from "@/lib/types";
import ForestIcon from "@mui/icons-material/Forest";
import ImageIcon from "@mui/icons-material/Image";

export const ROUTES: RouteEntry[] = [
  { path: "/upload", title: "Upload de imagens", Icon: ImageIcon },
  { path: "/areas", title: "Áreas analisadas", Icon: ForestIcon },
];

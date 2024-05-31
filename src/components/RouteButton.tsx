"use client";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { usePathname } from "next/navigation";
import { ReactComponentLike } from "prop-types";

export const RouteButton = ({
  path,
  title,
  Icon,
}: {
  path: string;
  title: string;
  Icon: ReactComponentLike;
}) => (
  <ListItemButton selected={usePathname() === path} sx={{ borderRadius: 4 }}>
    <ListItemIcon>
      <Icon color="primary" />
    </ListItemIcon>
    <ListItemText
      primary={title}
      primaryTypographyProps={{ width: "max-content" }}
    />
  </ListItemButton>
);

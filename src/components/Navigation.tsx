import { ROUTES } from "@/lib/routes";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ReactNode } from "react";

const NavigationContent = () => (
  <>
    <Box pl={2} pt={2} pb={4}>
      <Typography variant="h1" fontSize={24}>
        ReforestAI
      </Typography>
    </Box>
    <List>
      {ROUTES.map(([path, title]) => (
        <ListItem key={path} disablePadding>
          <Link
            href={path}
            sx={{ width: "100%", textDecoration: "none", color: "unset" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  </>
);

export function Navigation({ children }: { children: ReactNode }) {
  return (
    <Box display="flex" height="100%">
      <Box p={2} bgcolor="background.paper" height="100%">
        <NavigationContent />
      </Box>

      <Box component="main" p={5}>
        {children}
      </Box>
    </Box>
  );
}

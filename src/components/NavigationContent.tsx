import { RouteButton } from "@/components/RouteButton";
import { ROUTES } from "@/lib/routes";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export const NavigationContent = () => (
  <Box p={2} bgcolor="background.paper" height="100%" borderRadius={4}>
    <Box pl={2} pt={2} pb={4}>
      <Typography variant="h1" fontSize={24} sx={{ fontWeight: 900 }}>
        ReforestAI
      </Typography>
    </Box>
    <List>
      {ROUTES.map(({ path, title, Icon }) => (
        <ListItem key={path}>
          <Link
            href={path}
            sx={{ width: "100%", textDecoration: "none", color: "unset" }}
          >
            <RouteButton path={path} title={title} Icon={Icon} />
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

import { NavigationContent } from "@/components/NavigationContent";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

export const Navigation = ({ children }: { children: ReactNode }) => (
  <Box display="flex" height="100%">
    <Box p={2} height="100vh" position="sticky" top={0}>
      <NavigationContent />
    </Box>
    <Box component="main" p={5} width="100%">
      {children}
    </Box>
  </Box>
);

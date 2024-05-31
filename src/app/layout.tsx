import { Navigation } from "@/components/Navigation";
import { theme } from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const RootLayout = (props: { children: ReactNode }) => (
  <html lang="pt-BR">
    <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation>{props.children}</Navigation>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;

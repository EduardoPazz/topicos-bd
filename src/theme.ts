"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A5FEDE",
    },
    secondary: {
      main: "#676565",
    },
    background: {
      default: "#222222",
      paper: "#383838",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
            overscroll-behavior: none;
        }
      `,
    },
  },
});

"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
    secondary: {
      light: grey[50],
      main: grey[50],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: "none",
          ...(ownerState.size === "medium" && {
            minHeight: theme.spacing(5),
          }),
        }),
      },
    },
  },
});

export default theme;

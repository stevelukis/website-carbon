import { createTheme } from "@mui/material";

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "@mui/material/styles" {
  interface CustomPalette {
    customBackground: {
      primary: string;
    };
  }

  // noinspection JSUnusedGlobalSymbols
  interface Palette extends CustomPalette {}

  // noinspection JSUnusedGlobalSymbols
  interface PaletteOptions extends CustomPalette {}
}

const theme = createTheme({
  palette: {
    customBackground: {
      primary: "#f8f1d5",
    },
  },
});

export default theme;

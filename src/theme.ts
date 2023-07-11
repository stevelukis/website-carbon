import {createTheme} from "@mui/material";

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

const primaryColor = {
  main: "#50692d",
};

const secondaryColor = {
  main: "#9ba66b",
};

const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    customBackground: {
      primary: "#f8f1d5",
    },
    text: {
      primary: primaryColor.main,
      secondary: secondaryColor.main,
    },
  },
  typography: {
    h1: {
      fontFamily: "Caprasimo, cursive",
    },
  },
});

export default theme;

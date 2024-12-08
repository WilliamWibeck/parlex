import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212", // Sets the default background color
      paper: "#FFFFFF", // Sets the background for cards and other paper surfaces
    },
    primary: {
      main: "#FFFFFF", // Primary color for buttons, links, etc.
    },
    secondary: {
      main: "#FFFFFF", // Secondary color for accent elements
    },
  },
});

export default theme;

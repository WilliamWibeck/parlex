import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212", // Sets the default background color
      paper: "#1E1E1E", // Sets the background for cards and other paper surfaces
    },
    primary: {
      main: "#2C2C2C", // Primary color for buttons, links, etc.
    },
    secondary: {
      main: "#3C3C3C", // Secondary color for accent elements
    },
  },
});

export default theme;

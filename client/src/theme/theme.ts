import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(80, 80, 80)", // Mid-tone gray
    },
    secondary: {
      main: "rgb(168, 168, 168)", // Light gray
    },
    background: {
      default: "rgb(224, 224, 224)", // Lightest gray
      paper: "rgb(215, 215, 215)", // Slightly darker background
    },
    text: {
      primary: "rgb(18, 18, 18)", // Darkest gray
      secondary: "rgb(115, 115, 115)", // Medium-light gray
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            color: "rgb(18, 18, 18)", // Ensure text color is visible
          },
          "& .MuiInputLabel-root": {
            color: "rgb(80, 80, 80)", // Label color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(115, 115, 115)", // Hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(80, 80, 80)", // Focus border color
          },
        },
      },
    },
  },
});

export default theme;

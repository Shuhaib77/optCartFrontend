import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFAEC", // Primary color
      contrastText: "#ffffff", // Text color for primary buttons, etc.
    },
    secondary: {
      main: "#F5ECD5", // Secondary color
      contrastText: " rgba(87, 142, 126, 0.28)", // Text color for secondary buttons, etc.
    },
    background: {
      default: " #578E7E", // Background color
      paper: "#ffffff",
    //   default: "rgba(87, 142, 126, 0.53)", // Background for paper components
    },
    text: {
      primary: "#3D3D3D", // Default text color
      secondary: "#555555", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;

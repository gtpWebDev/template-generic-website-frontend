import { createTheme } from "@mui/material/styles";

/**
 * Site theme applied in main.jsx, so default for whole site.
 * Styles potentially applied at lower level - e.g. Conversations route
 */

const SiteTheme = createTheme({
  palette: {
    primary: {
      main: "#1A73E8", // Futuristic blue
      contrastText: "#FFFFFF", // White text for readability
    },
    secondary: {
      main: "#8AB4F8", // Soft light blue
      contrastText: "#000000", // Black text for emphasis
    },
    background: {
      default: "#121212", // Dark gray for a clean, modern background
      paper: "#1E1E1E", // Slightly lighter shade for cards and containers
    },
    text: {
      primary: "#E8EAED", // Bright gray for primary text
      secondary: "#9AA0A6", // Muted gray for secondary text
    },
    warning: {
      main: "#FFC107", // Amber for warnings
    },
    error: {
      main: "#D32F2F", // Deep red for errors
    },
    success: {
      main: "#00C853", // Vibrant green for successes
    },
    info: {
      main: "#2196F3", // Blue for informative accents
    },
  },
  typography: {
    fontFamily: `'Orbitron', 'Arial', sans-serif`, // Sleek and professional font
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#8AB4F8", // Soft blue for headings
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#1A73E8", // Main blue accent
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#E8EAED", // Bright gray for headings
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#9AA0A6", // Muted gray for body text
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          padding: "8px 16px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #1A73E8 0%, #8AB4F8 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(90deg, #0056B3 0%, #6CA7F8 100%)",
          },
        },
        outlinedPrimary: {
          borderColor: "#8AB4F8",
          color: "#8AB4F8",
          "&:hover": {
            borderColor: "#1A73E8",
            color: "#1A73E8",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          color: "#E8EAED",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#1E1E1E",
          color: "#E8EAED",
          borderBottom: "1px solid #303F9F", // Subtle blue line
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8AB4F8",
            },
            "&:hover fieldset": {
              borderColor: "#1A73E8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1A73E8",
            },
          },
        },
      },
    },
  },
});

export default SiteTheme;

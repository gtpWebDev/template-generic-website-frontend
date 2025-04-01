import { createTheme } from "@mui/material/styles";

const SiteTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#388E3C", // Strong, earthy green (now primary)
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#81D4FA", // Light blue for optional contrast
      contrastText: "#000000",
    },
    background: {
      default: "#F4F7F3", // Gentle off-white with natural tone
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B5E20", // Deep green text
      secondary: "#4E5D52", // Muted forest gray
    },
    warning: {
      main: "#F9A825",
    },
    error: {
      main: "#C62828",
    },
    success: {
      main: "#43A047",
    },
    info: {
      main: "#66BB6A", // Green-leaning info
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#2E7D32", // Strong natural green
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#388E3C",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#1B5E20",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#4E5D52",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "10px 20px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #388E3C 0%, #66BB6A 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(90deg, #2E7D32 0%, #43A047 100%)",
          },
        },
        outlinedPrimary: {
          borderColor: "#388E3C",
          color: "#388E3C",
          "&:hover": {
            borderColor: "#2E7D32",
            color: "#2E7D32",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1B5E20",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
          borderLeft: "5px solid #66BB6A",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#388E3C",
          color: "#FFFFFF",
          borderBottom: "1px solid #2E7D32",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FAFAFA",
            "& fieldset": {
              borderColor: "#A5D6A7",
            },
            "&:hover fieldset": {
              borderColor: "#66BB6A",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#388E3C",
            },
          },
        },
      },
    },
  },
});

export default SiteTheme;

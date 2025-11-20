import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C41E3A", // Rojo navideño para botones principales
      contrastText: "#ffffff", // blanco para letras dentro de botones
    },
    secondary: {
      main: "#165B33", // Verde navideño para textos, footer, dividers
      contrastText: "#ffffff",
    },
    background: {
      default: "#FFF5E6", // crema cálido para fondo general
      paper: "#FFFFFF", // blanco para cards y superficies
    },
    text: {
      primary: "#165B33", // verde navideño para texto principal
      secondary: "#C41E3A", // rojo navideño para texto secundario
    },
    divider: "rgba(22, 91, 51, 0.12)", // dividers con tono verde
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ffa000",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#388e3c",
    },
    gameBg: "#FFD700", // dorado para elementos de minijuegos
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#C41E3A",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#a01830",
          },
        },
        containedSecondary: {
          backgroundColor: "#165B33",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#0d4427",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#165B33", // header verde navideño
          color: "#ffffff",
          borderBottom: "2px solid #C41E3A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 16,
          border: "2px solid #C41E3A",
          boxShadow: "0 2px 8px rgba(196, 30, 58, 0.1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        colorPrimary: {
          backgroundColor: "#C41E3A",
          color: "#ffffff",
        },
        colorSecondary: {
          backgroundColor: "#165B33",
          color: "#ffffff",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      color: "#C41E3A",
      fontWeight: 700,
    },
    h2: {
      color: "#165B33",
      fontWeight: 700,
    },
  },
});

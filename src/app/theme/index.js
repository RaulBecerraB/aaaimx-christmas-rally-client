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

// Estilos reutilizables para componentes de ejercicios
export const exerciseStyles = {
  // Propiedades de selección de texto
  noSelect: {
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },

  // Animación de vibración
  shake: {
    animation: "shake 0.8s cubic-bezier(.36,.07,.19,.97) both",
  },

  // Contenedor principal
  container: {
    backgroundColor: "#FFF5E6",
    padding: "0.5rem",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
  },

  // Contenedor de contenido
  mainContainer: {
    maxWidth: "56rem",
    margin: "0 auto",
    paddingBottom: "2rem",
  },

  // Título
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#165B33",
    marginBottom: "0.5rem",
  },

  // Caja de mensajes
  messageBox: {
    textAlign: "center",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    marginBottom: "0.5rem",
  },

  // Contenedor flex
  flexContainer: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
  },

  // Panel
  panel: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
  },

  // Título del panel
  panelTitle: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "0.5rem",
  },

  // Lista de piezas
  piecesList: {
    marginBottom: "1rem",
    flexGrow: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  // Pieza individual
  pieceItem: {
    backgroundColor: "white",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    borderRadius: "0.25rem",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    cursor: "move",
    transition: "background-color 0.2s",
    fontSize: "0.875rem",
  },

  // Hover en pieza
  pieceItemHover: {
    backgroundColor: "#f9fafb",
  },

  // Overlay para modal
  overlayStyle: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Caja de felicitaciones
  congratsBox: {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "28rem",
    margin: "0 auto",
    animation: "bounce-slow 3s infinite",
  },

  // Título de felicitaciones
  congratsTitle: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#C41E3A",
    marginBottom: "1rem",
  },

  // Texto de felicitaciones
  congratsText: {
    fontSize: "1.25rem",
    color: "#374151",
  },

  // Alturas reutilizables
  heights: {
    h12: "4rem",
    h10: "3.5rem",
    h28: "14rem",
    hFull: "100%",
  },
};

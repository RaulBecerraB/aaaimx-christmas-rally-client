import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#757575",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

// Estilos reutilizables para componentes de ejercicios
export const exerciseStyles = {
  noSelect: {
    userSelect: "none",
  },
  shake: {
    animation: "shake 0.8s cubic-bezier(.36,.07,.19,.97) both",
  },
  mainContainer: {
    maxWidth: "56rem",
    margin: "0 auto",
    paddingBottom: "2rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginBottom: "0.5rem",
  },
  messageBox: {
    textAlign: "center",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    marginBottom: "0.5rem",
  },
  flexContainer: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
  },
  panel: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  panelTitle: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "0.5rem",
  },
  piecesList: {
    marginBottom: "1rem",
    flexGrow: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  pieceItem: {
    backgroundColor: "white",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.25rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    cursor: "move",
    transition: "background-color 0.2s",
    fontSize: "0.875rem",
  },
  overlayStyle: {
    position: "fixed",
    inset: 0,
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  congratsBox: {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "28rem",
    margin: "0 auto",
    animation: "bounce-slow 3s infinite",
  },
  congratsTitle: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: "1rem",
  },
  congratsText: {
    fontSize: "1.25rem",
    color: "#333333",
  },
  heights: {
    h12: "4rem",
    h10: "3.5rem",
    h28: "14rem",
    hFull: "100%",
  },
};

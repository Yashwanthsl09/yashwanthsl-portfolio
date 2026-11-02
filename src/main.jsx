import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./styles/global.css";

const theme = createTheme({
  palette: { mode: "dark", primary: { main: "#8b7cff" }, background: { default: "#080d19", paper: "#111a2b" } },
  typography: { fontFamily: '"DM Sans", sans-serif', button: { textTransform: "none", fontWeight: 700 } },
  shape: { borderRadius: 14 }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter><App /></BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
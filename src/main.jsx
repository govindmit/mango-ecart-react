import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    background: {
      default: "#F2F2F2",
    },
    primary: {
      light: "#ffba5a",
      main: "#ffba5a",
      dark: "#fb9400",
      contrastText: "#fff", // your primary color
    },
  },
  typography: {
    // Customize the body1 variant
    body1: {
      fontSize: ".800rem",
      color: "#455560",
      fontWeight: "500", // Adjust the font size as needed
      // Add any other desired styles here
    },
  },
});

function autologout() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    window.location.reload(false);
  }
}
setInterval(autologout, 5000000);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

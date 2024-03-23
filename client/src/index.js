import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFBF4",
    },
    primary: {
      main: "#1F3541",
    },
    secondary: {
      main: "#ADB3BC",
    },
    text: {
      primary: "#1F3541",
      secondary: "#ADB3BC",
    },
  },

  typography: {
    fontFamily: ["montserrat", "lato"].join(","),

    h1: {
      fontWeight: 600,
      fontFamily: "montserrat",
      fontSize: "15px",
    },
    h2: {
      fontWeight: 600,
      fontFamily: "lato",
      fontSize: "15px",
    },
    h3: {
      fontWeight: 400,
      fontFamily: "lato",
      fontSize: "20px",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewApp />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

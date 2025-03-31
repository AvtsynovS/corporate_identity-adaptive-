import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

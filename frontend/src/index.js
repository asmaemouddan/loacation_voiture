import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
   <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
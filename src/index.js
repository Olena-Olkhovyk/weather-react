import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="App">
      <div className="Weather">
        <div className="container">
          <Weather defaultCity="Kyiv" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/Olena-Olkhovyk?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="gitLink"
        >
          My github
        </a>
      </footer>
    </div>
  </StrictMode>
);

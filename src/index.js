import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="Weather">
        <div className="container">
          <Weather />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/Olena-Olkhovyk?tab=repositories"
          target="_blank"
          className="gitLink"
        >
          My github
        </a>
      </footer>
    </div>
  </React.StrictMode>
);

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
    </div>
  </React.StrictMode>
);

import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Carlisle" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olha-bondarenko-393090242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olha Bondarenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Olha1990/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

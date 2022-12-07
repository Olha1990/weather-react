import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Carlisle" />
        <footer>
          This project was coded by Olha Bondarenko and is
          <a
            href="https://github.com/Olha1990/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
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
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheitConversion(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsiusConversion(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div id="fahrenheitLink">
        <div className="temp" id="temp">
          {Math.round(props.celsius)}
        </div>
        <div className="units">
          <a href="/" id="celsiusLink">
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={fahrenheitConversion}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div id="fahrenheitLink">
        <div className="temp">{Math.round(fahrenheit())}</div>
        <div className="units">
          <a href="/" onClick={celsiusConversion}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}

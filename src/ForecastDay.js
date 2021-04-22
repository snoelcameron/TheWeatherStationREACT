import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./App.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastCard">
      <div className="ForecastTemperature"> {maxTemp()}</div>{" "}
      <div className="ForecastDay"> {day()} </div>
      <ForecastIcon icon={props.data.weather[0].icon} size={120} />
    </div>
  );
}

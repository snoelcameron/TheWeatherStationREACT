import React from "react";
import WeatherIcon from "./WeatherIcon";
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
      <div className="ForecastDay">
        <div className="ForecastTemperature"> {maxTemp()}</div>{" "}
        <div className="Day"> {day()} </div>
        <div className="col">
          <WeatherIcon code={props.data.weather[0].icon} size={50} />
        </div>
      </div>
    </div>
  );
}

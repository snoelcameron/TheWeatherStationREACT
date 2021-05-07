import React from "react";
import ForecastIcon from "./ForecastIcon";
import Card from "react-bootstrap/Card";
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

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastCard">
      <Card className="ForecastCard">
        <ForecastIcon icon={props.data.weather[0].icon} size={120} />
        <Card.ImgOverlay id="cardSize">
          <Card.Title className="ForecastTemperature"> {maxTemp()}</Card.Title>
          <Card.Title className="ForecastTemperatureLow">
            {" "}
            {minTemp()}
          </Card.Title>
          <Card.Text className="ForecastDate"> {day()} </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

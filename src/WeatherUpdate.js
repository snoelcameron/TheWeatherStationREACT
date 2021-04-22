import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import "./App.css";

export default function WeatherUpdate(props) {
  return (
    <div className="WeatherUpdate">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
          <h4>{props.data.description}</h4>
          <h4>Humidity: {props.data.humidity}%</h4>
          <h4>Wind Speed: {Math.round(props.data.wind)}km/h</h4>
          <div>
            <h4 className="temperature">
              <WeatherConversion celsius={props.data.temperature} />
            </h4>
          </div>
        </div>
        <div className="col-6">
          <div className="icon">
            <WeatherIcon src={props.data.icon} size={364} />
          </div>
        </div>
      </div>
    </div>
  );
}

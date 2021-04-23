import React from "react";
import "./App.css";

export default function ForecastIcon(props) {
  let iconForecast = "";
  if (props.icon === "01d" || props.icon === "01n") {
    iconForecast = "images/sunsmall.png";
  } else if (props.icon === "02n" || props.icon === "02d") {
    iconForecast = "images/sunsmall.png";
  } else if (
    props.icon === "03d" ||
    props.icon === "03n" ||
    props.icon === "04d" ||
    props.icon === "04n" ||
    props.icon === "50d" ||
    props.icon === "50n"
  ) {
    iconForecast = "images/cloudsmall.png";
  } else if (
    props.icon === "10n" ||
    props.icon === "10d" ||
    props.icon === "9n" ||
    props.icon === "9d"
  ) {
    iconForecast = "images/rainsmall.png";
  } else if (props.icon === "11d" || props.icon === "11n") {
    iconForecast = "images/thundersmall.png";
  } else if (props.icon === "13d" || props.icon === "13n") {
    iconForecast = "images/snowsmall.png";
  }

  return <img src={iconForecast} alt="Forecast icon" width={120} />;
}

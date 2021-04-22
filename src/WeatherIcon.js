import React from "react";
import "./App.css";

export default function WeatherIcon(props) {
  let WeatherIcon = "";

  if (icon === "01d" || icon === "01n") {
    WeatherIcon = "images/sunsmall.png";
  } else if (icon === "02n" || icon === "02d") {
    WeatherIcon = "images/sunsmall.png";
  } else if (
    icon === "03d" ||
    icon === "03n" ||
    icon === "04d" ||
    icon === "04n" ||
    icon === "50d" ||
    icon === "50n"
  ) {
    WeatherIcon = "images/cloudsmall.png";
  } else if (
    icon === "10n" ||
    icon === "10d" ||
    icon === "9n" ||
    icon === "9d"
  ) {
    WeatherIcon = "images/rainsmall.png";
  } else if (icon === "11d" || icon === "11n") {
    WeatherIcon = "images/thundersmall.png";
  } else if (icon === "13d" || icon === "13n") {
    WeatherIcon = "images/snowsmall.png";
  }
  return WeatherIcon;
}

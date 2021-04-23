import React from "react";
import "./App.css";

export default function backgroundColor(props) {
  let backgroundGradient = "";
  if (props.icon === "01d" || props.icon === "01n") {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (props.icon === "02n" || props.icon === "02d") {
    backgroundGradient = "linear-gradient(#ffc10d, #fe9f00)";
  } else if (
    props.icon === "03d" ||
    props.icon === "03n" ||
    props.icon === "04d" ||
    props.icon === "04n" ||
    props.icon === "50d" ||
    props.icon === "50n"
  ) {
    backgroundGradient = "linear-gradient(#3E7DBA, #2D52A7)";
  } else if (
    props.icon === "10n" ||
    props.icon === "10d" ||
    props.icon === "9n" ||
    props.icon === "9d"
  ) {
    backgroundGradient = "linear-gradient(#a4abbe, #4f5077)";
  } else if (props.icon === "11d" || props.icon === "11n") {
    backgroundGradient = "linear-gradient(#a4abbe, #4f5077)";
  } else if (props.icon === "13d" || props.icon === "13n") {
    backgroundGradient = "linear-gradient(#83bcc8, #628a9d)";
  }

  return backgroundGradient;
}

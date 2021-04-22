import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./App.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function update() {
    let apiKey = "80c84163db9433d86bea5c88b0e43920";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="card" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    update();

    return null;
  }
}

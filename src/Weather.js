import React, { useState } from "react";
import axios from "axios";
import WeatherUpdate from "./WeatherUpdate";
import Forecast from "./Forecast";
import "./App.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showResponse(response) {
    setWeatherInfo({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = `80c84163db9433d86bea5c88b0e43920`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <WeatherUpdate data={weatherInfo} />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="🔍 Search for a city"
              className="search-bar"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="submit" />
          </div>
        </form>
        <Forecast coordinates={weatherInfo.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

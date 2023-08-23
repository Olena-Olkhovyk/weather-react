import "./Weather.css";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function changeCity(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }
  function search() {
    const apiKey = "4b3503b2f08a729413c4d33ef1186004";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }
  let form = (
    <form className="formControl" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city.."
        autoComplete="off"
        onChange={changeCity}
      />
      <input type="submit" value="Search" name="search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h1 className="city">{weather.city}</h1>
        <h2>
          <FormattedDate date={weather.date} />
        </h2>
        <h2 className="description">{weather.description}</h2>
        <div className="weather-elements">
          <div className="temp-icon">
            <img src={weather.icon} alt={weather.description} />
            <WeatherTemperature celsius={weather.temperature} />
          </div>
          <div className="humid-wind">
            <ul>
              <li>Humidity:{weather.humidity}%</li>
              <li>Wind:{weather.wind}km/h</li>
              <li>Pressure:{weather.pressure}Pa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}

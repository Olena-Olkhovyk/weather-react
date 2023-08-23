import "./Weather.css";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function changeCity(e) {
    e.preventDefault();
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
        <h1 className="city">{city}</h1>
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
    return (
      <>
        {form}
        <h1>Kyiv</h1>
        <h2>Wendesday 20:00</h2>
        <h2 className="description">Sunny</h2>
        <div className="temp-icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt="weather-icon"
          />
          <span className="temperature">19</span>
          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>{" "}
            |<a href="/">°F</a>
          </span>
        </div>
        <div className="humid-wind">
          <ul>
            <li>Humidity:61%</li>
            <li>Wind:0.45km/h</li>
            <li>Pressure:1011Pa</li>
          </ul>
        </div>
      </>
    );
  }
}

import React from "react";
import "./WeatherCard.scss";
import moment from "moment";
const dtYoHour = (dt) =>
  moment(dt * 1000)
    .calendar()
    .split(" ")[2] +
  " " +
  moment(dt * 1000)
    .calendar()
    .split(" ")[3];

const WeatherCard = ({ city, day }) => {
  console.log("city");
  console.log(city);
  return (
    <div className="weather-card">
      <div className="day-time">
        <h3 className="day">{day}</h3>
        <div className="time">{dtYoHour(city.dt)}</div>
        <h2 className="main-weather">{city.weather[0].main}</h2>
      </div>
      <div className="icon-container">
        <img
          src={`./weather/${city.weather[0].icon}.svg`}
          alt="wheather icon"
        />
      </div>
      <div className="temp">
        <h1 className="current-temp">
          {Math.round(city.main.temp)}°<span className="celsius">C</span>
        </h1>
      </div>
    </div>
  );
};

export default WeatherCard;

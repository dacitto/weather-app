import React from "react";
import "./WeatherCard.scss";
import moment from "moment";

const WeatherCard = ({ city }) => {
  console.log("city");
  console.log(city);
  return (
    <div className="weather-card">
      <div className="col">
        {moment(city.dt * 1000)
          .calendar()
          .split(" ")[2] +
          " " +
          moment(city.dt * 1000)
            .calendar()
            .split(" ")[3]}
      </div>
      <div className="icon-container">
        <img
          src={`./weather/${city.weather[0].icon}.svg`}
          alt="wheather icon"
        />
      </div>
      <div className="col">
        <h1 className="current-temp">
          {Math.round(city.main.temp)}°<span className="celsius">C</span>
        </h1>
      </div>
    </div>
  );
};

export default WeatherCard;

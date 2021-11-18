import React, { useState } from "react";
import moment from "moment";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./CardsContainer.scss";
let setOfDays = new Set();
const CardsContainer = ({ data }) => {
  const [dayTime, setDayTime] = useState("Today");
  data["list"].map((city) =>
    setOfDays.add(
      moment(city.dt * 1000)
        .calendar()
        .split(" ")[0]
    )
  );
  const ArrayOfDays = [...setOfDays];
  return (
    <div>
      <ul className="list-of-days">
        {ArrayOfDays.map((day) => (
          <li
            key={day}
            className={day === dayTime ? "daytime active" : "daytime"}
            onClick={() => {
              setDayTime(day);
            }}
          >
            {day}
          </li>
        ))}
      </ul>
      {data["list"]
        .filter(
          (city) =>
            moment(city.dt * 1000)
              .calendar()
              .split(" ")[0] === dayTime
        )
        .map((cityWeather) => (
          <WeatherCard city={cityWeather} key={cityWeather.dt}></WeatherCard>
        ))}
    </div>
  );
};

export default CardsContainer;

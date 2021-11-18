import React from "react";
import "./Weather.scss";
import { useQuery } from "react-query";
import CardsContainer from "../CardsContainer/CardsContainer";
import Map from "../Map/Map";
//import weather from "../../../public/weather";
const fetchWeathers = async (key) => {
  const city = key.queryKey[1];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return res.json();
};

const Weather = ({ datas }) => {
  const { data, status } = useQuery(["days", datas.name], fetchWeathers);
  return (
    <div className="container">
      <div className="weather">
        <div className="col">
          <h1 className="city">{datas.name}</h1>
          <h2>{datas.weather[0].main}</h2>
        </div>
        <div className="col">
          <div className="icon-container">
            <img
              src={`./weather/${datas.weather[0].icon}.svg`}
              alt="wheather icon"
            />
          </div>
        </div>
        <div className="col">
          <h1 className="current-temp">
            {Math.round(datas.main.temp)}°<span className="celsius">C</span>
          </h1>
          <div className="min-max-temp">
            <span>Min {Math.round(datas.main.temp_min)}</span>/
            <span>Max {Math.round(datas.main.temp_max)}</span>
          </div>
        </div>
      </div>

      {data && <CardsContainer data={data}></CardsContainer>}
    </div>
  );
};

export default Weather;

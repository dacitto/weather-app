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
          <h2 className="city-name">
            {datas.name}, <span className="country">{datas.sys.country}</span>
          </h2>
          <h1 className="city-weather">{datas.weather[0].main}</h1>
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
          <h3 className="feels-like">
            Feels like {Math.round(datas.main.feels_like)}°
            <span className="celsius">C</span>
          </h3>
        </div>
        <div className="stat-row">
          <div className="status">
            <span className="text">Humidity</span> {datas.main.humidity}%
          </div>

          <div className="status">
            <span className="text">wind speed</span> {datas.wind.speed}km
          </div>

          <div className="status">
            <span className="text">visibility</span> {datas.visibility / 1000}km
          </div>
        </div>
      </div>
      <Map lon={datas.coord.lon} lat={datas.coord.lat} city={datas.name} />

      {data && <CardsContainer data={data}></CardsContainer>}
    </div>
  );
};

export default Weather;

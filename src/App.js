import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading";
const fetchWeather = async (key) => {
  const city = key.queryKey[1];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return res.json();
};

function App() {
  const [city, setCity] = useState("");
  const { data, status } = useQuery(["city", city], fetchWeather);
  useEffect(() => {
    const getGpsLocation = async (data) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`
      );
      res
        .json()
        .then((data) => {
          setCity(data["name"]);
        })
        .catch((error) => setCity(""));
    };
    navigator.geolocation.getCurrentPosition(
      getGpsLocation,
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <div>
      <Header setCity={setCity} city={city}></Header>
      {status === "loading" && <Loading />}
      {status === "success" && data.name && (
        <Weather city={city} datas={data}></Weather>
      )}
    </div>
  );
}

export default App;

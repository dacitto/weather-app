import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
const fetchWeather = async (key) => {
  const city = key.queryKey[1];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return res.json();
};

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

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
    navigator.geolocation.getCurrentPosition(getGpsLocation, error, options);
  }, []);
  return (
    <div>
      <Header setCity={setCity} city={city}></Header>
      {status === "loading" && <h3>Loading</h3>}
      {status === "success" && data.name && (
        <Weather city={city} datas={data}></Weather>
      )}
    </div>
  );
}

export default App;

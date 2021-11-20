import { useQuery } from "react-query";
import { useState } from "react";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
const fetchWeather = async (key) => {
  const city = key.queryKey[1];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  return res.json();
};

console.log("geo");
console.log(navigator.geolocation);
function App() {
  const [city, setCity] = useState("djelfa");
  const { data, status } = useQuery(["city", city], fetchWeather);
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

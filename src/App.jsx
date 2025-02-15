import "./App.css";
const apiKey = import.meta.env.VITE_API_KEY || process.env.VITE_API_KEY;

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    currentWeather: null,
    forecast: null,
    pollution: null,
  });

  const [coordinate, setCoordinate] = useState(null);

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
  });

  const [showMyModel, setShowMyModel] = useState(false);

  function handlClick() {
    setShowMyModel(true);
  }

  function handleCity(data) {
    setCity(data);
  }

  useEffect(() => {
    if (city === "") {
      return;
    }
    async function fetchCord() {
      try {
        const baseUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=`;
        const suffix = apiKey;
        let url = baseUrl + suffix;
        let res = await fetch(url);
        let cord = await res.json();
        setCoordinate(cord);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCord();
  }, [city]);

  function handleLocation(value) {
    setLocation((loc) => ({ ...loc, ...value }));
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`;
    const pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`;

    async function fetchData() {
      setLoading(true);

      try {
        const [currentWeatherRes, forecastRes, pollutionRes] =
          await Promise.all([
            fetch(currentWeatherURL),
            fetch(forecastURL),
            fetch(pollutionURL),
          ]);

        const [currentWeather, forecast, pollution] = await Promise.all([
          currentWeatherRes.json(),
          forecastRes.json(),
          pollutionRes.json(),
        ]);
        setData({ currentWeather, forecast, pollution });

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [location]);

  return (
    <div className="bg-zinc-900 md:pt-6 md:px-6">
      <Header
        change={handleCity}
        handleClick={handlClick}
        location={handleLocation}
        coordinate={coordinate}
        className="font-roboto "
      />
      <div className="md:grid md:grid-cols-3  lg:grid-cols-4">
        {" "}
        <SideNav className="font-roboto " location={location} data={data} />
        <Main data={data} />
      </div>
    </div>
  );
}

export default App;

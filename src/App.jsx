import "./App.css";
const apiKey = import.meta.env.VITE_API_KEY;
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Footer from "./components/footer";

function App() {
  const [data, setData] = useState(null);

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
  useEffect(() => {}, [city]);

  function handleLocation(value) {
    setLocation((loc) => ({ ...loc, ...value }));
  }
  console.log(location);
  useEffect(() => {
    if (loading) {
      return;
    }

    async function fetchData() {
      setLoading(true);

      try {
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=`;
        const suffix = apiKey;
        const url = baseUrl + suffix;
        let res = await fetch(url);
        let currentWeather = await res.json();
        setData((prev) => ({ ...prev, ...currentWeather }));
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [location]);

  return (
    <>
      <Header
        change={handleCity}
        handleClick={handlClick}
        location={handleLocation}
        className="font-roboto "
      />

      <SideNav className="font-roboto " location={location} data={data} />
      <Main />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState(null);
  const [showMyModel, setShowMyModel] = useState(false);

  function handlClick() {
    setShowMyModel(true);
  }

  function handleCity(data) {
    setCity(data);
  }
  function handleLocation(value) {
    setLocation(value);
  }
  console.log(location);
  return (
    <>
      <Header
        change={handleCity}
        handleClick={handlClick}
        location={handleLocation}
        className="font-roboto "
      />

      <SideNav className="font-roboto " location={location} />
      <Main />
      <Footer />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

import helsinki from "./image/helsinki.jpeg";
import NavBar from "./component/navbar/NavBar";
import LandingPage from "./component/landingPage";
import MapComponent from "./component/map/MapComponent";

export type PlaceType = {
  id: string;
  location: {
    lat: number;
    lon: number;
  };
};

function App() {
  const url = "https://andre-map.herokuapp.com/v1/fetchMap";

  const [place, setPlace] = useState<PlaceType[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(place, "k");

  return (
    <div className="App">
      <NavBar />
      <img src={helsinki} alt="Helsinki" />
      <LandingPage />
      <MapComponent place={place} />
      <Routes>{/* <Route path="/" element={< />} /> */}</Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

import NavBar from "./component/navbar/NavBar";
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
      <MapComponent place={place} />;
    </div>
  );
}

export default App;

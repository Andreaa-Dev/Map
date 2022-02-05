import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

import Places from "./component/Places";

export type PlaceType = {
  id: string;
  location: {
    lat: number;
    lon: number;
  };
};

function App() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYW5kcmVhMmsiLCJhIjoiY2t6OGd6cGc0MWN6bTJudXNvN205Z2lsMSJ9.cP0F-8mYYwS1QlfO9djtAQ",
  });
  const helsinkiCoordinates: [number, number] = [24.945831, 60.192059];

  const url = "https://andre-map.herokuapp.com/v1/fetchMap";

  const [place, setPlace] = useState<PlaceType[]>([]);

  useEffect(() => {
    const data = axios
      .get(url)
      .then((response) => {
        setPlace(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Map - Andrea</h1>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={helsinkiCoordinates}
      >
        {place.map((item) => {
          return <Places key={item.id} item={item} />;
        })}
      </Map>
      ;
    </div>
  );
}

export default App;

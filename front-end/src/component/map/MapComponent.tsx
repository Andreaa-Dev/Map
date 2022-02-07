import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import Places from "./Places";

function MapComponent({ place }: PlacePropType) {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYW5kcmVhMmsiLCJhIjoiY2t6OGd6cGc0MWN6bTJudXNvN205Z2lsMSJ9.cP0F-8mYYwS1QlfO9djtAQ",
  });

  const helsinkiCoordinates: [number, number] = [24.945831, 60.192059];
  return (
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
  );
}

export default MapComponent;

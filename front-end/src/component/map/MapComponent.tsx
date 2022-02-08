import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import Places from "./Places";

function MapComponent({ place }: PlacePropType) {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_TOKEN,
  });

  const helsinkiCoordinates: [number, number] = [24.945831, 60.192059];
  return (
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "60vh",
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

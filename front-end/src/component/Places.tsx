import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Marker } from "react-mapbox-gl";
import { PlaceType } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type ItemPropType = {
  item: PlaceType;
};

function Places({ item }: ItemPropType) {
  const [location, setLocation] = useState<{
    name: string;
    description: string;
    info_url: string;
  }>({ name: "", description: "", info_url: "" });

  const [placeInformation, setPlaceInformation] = useState([]);

  const onClickHandler = (event) => {
    const data = axios
      .get(`http://localhost:5003/v1/fetchMap/${item.id}`)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Marker
      coordinates={[item.location.lon, item.location.lat]}
      anchor="bottom"
    >
      <LocationOnIcon onClick={onClickHandler} />
    </Marker>
  );
}

export default Places;

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Marker } from "react-mapbox-gl";

type ItemType = {
  item: any;
  handleClick: any;
};
function MarkerComponent({ item, handleClick }: ItemType) {
  return (
    <Marker
      coordinates={[item.location.lon, item.location.lat]}
      anchor="bottom"
      onClick={handleClick}
    >
      <LocationOnIcon />
    </Marker>
  );
}

export default MarkerComponent;

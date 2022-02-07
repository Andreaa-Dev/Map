import React, { useState } from "react";
import axios from "axios";
import MarkerComponent from "./MarkerComponent";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { PlaceType } from "../../App";

export type ItemPropType = {
  item: PlaceType;
};

function Places({ item }: ItemPropType) {
  const [location, setLocation] = useState<{
    name: {
      en: string;
    };
    description: { body: string };
    info_url: string;
  }>({ name: { en: "" }, description: { body: "" }, info_url: "" });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    const data = axios
      .get(`https://andre-map.herokuapp.com/v1/fetchMap/${item.id}`)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <MarkerComponent item={item} handleClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Name: {location.name.en}</Typography>
        <Typography sx={{ p: 2 }}>
          Description: {location.description.body}
        </Typography>
        <Typography sx={{ p: 2 }}>Website: {location.info_url}</Typography>
      </Popover>
    </div>
  );
}

export default Places;

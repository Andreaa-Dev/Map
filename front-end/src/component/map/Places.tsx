import React, { useState } from "react";
import axios from "axios";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { PlaceType } from "../../App";
import MarkerComponent from "./MarkerComponent";

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
        <Typography>
          Website:
          <a href={location.info_url}>
            <Typography> {location.info_url}</Typography>
          </a>
        </Typography>
        <BookmarkAddIcon />
      </Popover>
    </div>
  );
}

export default Places;

import React from "react";
import Box from "@mui/material/Box";

import { placeList } from "../list/placeList";

function CategoryPlace() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {placeList.map((item) => {
        return (
          <Box>
            <img
              border-radius="20px"
              src={item.image_link}
              alt={item.name}
              height="250px"
              width="300px"
            />
            <p>{item.name}</p>
          </Box>
        );
      })}
    </Box>
  );
}

export default CategoryPlace;

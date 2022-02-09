import React from "react";
import Box from "@mui/material/Box";
import tram from "../../image/tram.jpeg";
import map from "../../image/map.jpeg";

function Activity() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <img src={tram} alt="Helsinki tram" height="200px" width="150px" />
      <img src={map} alt="Helsinki road" height="200px" width="150px" />
    </Box>
  );
}

export default Activity;

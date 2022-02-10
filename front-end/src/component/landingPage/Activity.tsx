import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { activity } from "../list/activity";

function Activity() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {activity.map((item) => {
        return (
          <Box>
            <img src={item} alt={item.name} />
            <Typography>{item.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Activity;

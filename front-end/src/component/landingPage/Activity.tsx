import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
          <Box sx={{ position: "relative" }}>
            <img src={item.img} alt={item.name} height="400px" width="450px" />
            <Box
              sx={{ position: "absolute", overflow: "hidden", top: "250px" }}
            >
              <Typography>{item.name}</Typography>
              <Button>Explore </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Activity;

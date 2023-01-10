import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import PropTypes from "prop-types";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span
          style={{
            color: "#ff2625"
          }}>
          {name}
          {` `}
        </span>
        exercise videos
      </Typography>
    </Box>
  );
};

ExerciseVideos.propTypes = {
  exerciseVideo: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default ExerciseVideos;

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">Exercises that target the same muscle group</Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollbar data={targetMuscleExercises} bodyPart setBodyPart />
        )}
      </Stack>
    </Box>
  );
};

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired
};

export default SimilarExercises;

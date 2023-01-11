import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} isBodyPart={false} />
        ) : (
          <Loader />
        )}
      </Stack>{" "}
      <Typography variant="h3" mb={5}>
        Exercises that target the same equipment group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} isBodyPart={false} />
        ) : (
          <Loader />
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

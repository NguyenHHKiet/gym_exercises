import React from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import PropTypes from "prop-types";

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent={"center"}>
        {exercises.map((exercise, index) => (
          <p key={index}>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired
};
export default Exercises;

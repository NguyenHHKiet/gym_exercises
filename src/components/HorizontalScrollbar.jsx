import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import BodyPart from "./BodyPart";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import ExercisesCard from "./ExercisesCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box key={index || item} m="0 40px">
          {isBodyPart ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExercisesCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}
HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired,
  isBodyPart: PropTypes.bool.isRequired
};

export default HorizontalScrollbar;

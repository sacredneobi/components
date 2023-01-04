import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import Box from "../box";

const Default = (props) => {
  const { sxBox, fix, loading, ...other } = props;

  if (fix) {
    return (
      <Box sx={sxBox}>
        <Divider {...other} />
      </Box>
    );
  }
  return <Divider {...other} />;
};

Default.propTypes = {
  fix: PropTypes.bool,
  loading: PropTypes.bool,
  flexItem: PropTypes.bool,
  light: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
};

Default.defaultProps = {
  fix: false,
  flexItem: false,
  light: false,
  loading: false,
  orientation: "horizontal",
  textAlign: "center",
  variant: "fullWidth",
};

export default Default;

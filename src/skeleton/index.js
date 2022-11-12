import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";

const Default = (props) => {
  const { width, widthFull, ...other } = props;
  return <Skeleton width={widthFull ? "100%" : width} {...other} />;
};

Default.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  widthFull: PropTypes.bool,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["circular", "rectangular", "rounded", "text"]),
  animation: PropTypes.oneOf(["pulse", "wave"]),
};

Default.defaultProps = {
  widthFull: true,
  width: 100,
  height: 200,
  loading: false,
  variant: "text",
  animation: "pulse",
};

export default Default;

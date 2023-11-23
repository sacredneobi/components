import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Default = (props) => {
  const {
    defFlex,
    flex,
    column,
    row,
    grow,
    sx,
    nowrap,
    alignItems,
    name,
    center,
    overflow,
    gap,
    heightFull,
    heightVH,
    widthFull,
    justifyContent,
    loading,
    ai,
    jc,
    ...other
  } = props;

  let sxFlex = {};

  if (defFlex) {
    (sx ? sx : sxFlex).display = "flex";
    (sx ? sx : sxFlex).flexDirection = "column";
    if (!(sx ? sx : sxFlex).flexWrap) {
      (sx ? sx : sxFlex).flexWrap = "nowrap";
    }
  }

  if (center) {
    (sx ? sx : sxFlex).justifyContent = "center";
    (sx ? sx : sxFlex).alignItems = "center";
  }

  if (heightFull) {
    (sx ? sx : sxFlex).height = "100%";
  }
  if (heightVH) {
    (sx ? sx : sxFlex).height = "100vh";
  }
  if (widthFull) {
    (sx ? sx : sxFlex).width = "100%";
  }
  if (overflow) {
    (sx ? sx : sxFlex).overflow = "auto";
  }
  if (flex) {
    (sx ? sx : sxFlex).display = "flex";
  }
  if (column) {
    (sx ? sx : sxFlex).flexDirection =
      typeof column === "boolean" ? "column" : column;
  }
  if (row) {
    (sx ? sx : sxFlex).flexDirection = "row";
  }
  if (grow) {
    (sx ? sx : sxFlex).flexGrow =
      typeof grow === "boolean" ? 1 : parseInt(grow);
  }
  if (gap) {
    (sx ? sx : sxFlex).gap = typeof gap === "boolean" ? 1 : parseFloat(gap);
  }
  if (alignItems || ai) {
    if (alignItems) {
      (sx ? sx : sxFlex).alignItems =
        typeof alignItems === "boolean" ? "center" : alignItems;
    } else {
      (sx ? sx : sxFlex).alignItems = typeof ai === "boolean" ? "center" : ai;
    }
  }
  if (justifyContent || jc) {
    if (justifyContent) {
      (sx ? sx : sxFlex).justifyContent =
        typeof justifyContent === "boolean" ? "center" : justifyContent;
    } else {
      (sx ? sx : sxFlex).justifyContent =
        typeof jc === "boolean" ? "center" : jc;
    }
  }
  if (nowrap) {
    (sx ? sx : sxFlex).flexWrap = "nowrap";
  }

  return <Box name={name} sx={{ ...sxFlex, ...sx }} {...other} />;
};

Default.propTypes = {
  defFlex: PropTypes.bool,
  flex: PropTypes.bool,
  column: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  row: PropTypes.bool,
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  nowrap: PropTypes.bool,
  alignItems: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ai: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string,
  center: PropTypes.bool,
  overflow: PropTypes.bool,
  gap: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  heightFull: PropTypes.bool,
  heightVH: PropTypes.bool,
  widthFull: PropTypes.bool,
  justifyContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  jc: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  loading: PropTypes.bool,
};

Default.defaultProps = {
  loading: false,
  defFlex: false,
  flex: false,
  column: false,
  row: false,
  nowrap: false,
  center: false,
  widthFull: false,
  heightVH: false,
  heightFull: false,
  overflow: false,
};

export default Default;

import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

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
    mT,
    mB,
    mL,
    mR,
    m,
    p,
    pT,
    pB,
    pL,
    pR,
    ...other
  } = props;

  let sxFlex = {};

  if (defFlex) {
    (sx ? sx : sxFlex).display = "flex";
    (sx ? sx : sxFlex).flexDirection = "column";
    (sx ? sx : sxFlex).flexWrap = "nowrap";
  }

  if (center) {
    (sx ? sx : sxFlex).justifyContent = "center";
    (sx ? sx : sxFlex).alignItems = "center";
  }

  if (mT) {
    (sx ? sx : sxFlex).marginTop = parseFloat(mT);
  }
  if (mR) {
    (sx ? sx : sxFlex).marginRight = parseFloat(mR);
  }
  if (mL) {
    (sx ? sx : sxFlex).marginLeft = parseFloat(mL);
  }
  if (mB) {
    (sx ? sx : sxFlex).marginBottom = parseFloat(mB);
  }
  if (pT) {
    (sx ? sx : sxFlex).paddingTop = parseFloat(pT);
  }
  if (pR) {
    (sx ? sx : sxFlex).paddingRight = parseFloat(pR);
  }
  if (pL) {
    (sx ? sx : sxFlex).paddingLeft = parseFloat(pL);
  }
  if (pB) {
    (sx ? sx : sxFlex).paddingBottom = parseFloat(pB);
  }

  if (p) {
    (sx ? sx : sxFlex).padding = parseFloat(p);
  }
  if (m) {
    (sx ? sx : sxFlex).margin = parseFloat(m);
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
    (sx ? sx : sxFlex).flexDirection = "column";
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
  if (alignItems) {
    (sx ? sx : sxFlex).alignItems =
      typeof alignItems === "boolean" ? "center" : alignItems;
  }
  if (justifyContent) {
    (sx ? sx : sxFlex).justifyContent =
      typeof justifyContent === "boolean" ? "center" : justifyContent;
  }
  if (nowrap) {
    (sx ? sx : sxFlex).flexWrap = "nowrap";
  }

  return <Box name={name} sx={{ ...sxFlex, ...sx }} {...other} />;
};

Default.propTypes = {
  defFlex: PropTypes.bool,
  flex: PropTypes.bool,
  column: PropTypes.bool,
  row: PropTypes.bool,
  grow: PropTypes.number,
  nowrap: PropTypes.bool,
  alignItems: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string,
  center: PropTypes.bool,
  overflow: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  heightFull: PropTypes.bool,
  heightVH: PropTypes.bool,
  widthFull: PropTypes.bool,
  justifyContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  mT: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  mB: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  mL: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  mR: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  m: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  p: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  pT: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  pB: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  pL: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  pR: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
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

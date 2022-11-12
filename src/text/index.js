import React from "react";
import PropTypes from "prop-types";
import { Typography, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "../box";
import Tooltip from "../tooltip";

const Default = (props) => {
  const {
    caption,
    checkRender,
    loading,
    sx,
    children,
    color,
    help,
    navigation,
    allowSelect,
    noWrap,
    onClick,
    bold,
    timeout,
    enterDelay,
    fontSize,
    ...other
  } = props;

  const navigate = useNavigate();

  const handleOnNavigation = (event) => {
    navigate(navigation);
    event.stopPropagation();
  };

  if (loading) {
    return (
      <Skeleton
        variant="text"
        {...other}
        sx={{ fontSize: fontSize, width: "100%", ...sx }}
      />
    );
  }

  const item = (
    <Typography
      noWrap={noWrap}
      sx={{
        userSelect: allowSelect ? "unset" : "none",
        color: (theme) => theme.palette.text[color],
        whiteSpace: noWrap ? null : "pre-line",
        fontWeight: bold && "bold",
        fontSize: fontSize,
        ...sx,
      }}
      onClick={navigation ? handleOnNavigation : onClick}
      {...other}
    >
      {caption}
      {children}
    </Typography>
  );

  if (typeof checkRender === "function") {
    return checkRender() ? item : <Box {...other}></Box>;
  }

  return (
    <Tooltip help={help} timeout={timeout} enterDelay={enterDelay}>
      {item}
    </Tooltip>
  );
};

Default.propTypes = {
  caption: PropTypes.string.isRequired,
  help: PropTypes.string,
  timeout: PropTypes.number,
  enterDelay: PropTypes.number,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  navigation: PropTypes.string,
  loading: PropTypes.bool,
  bold: PropTypes.bool,
  noWrap: PropTypes.bool,
  allowSelect: PropTypes.bool,
  fontSize: PropTypes.number,
};

Default.defaultProps = {
  timeout: 600,
  enterDelay: 1000,
  loading: false,
  bold: false,
  noWrap: false,
  allowSelect: false,
  navigation: undefined,
  fontSize: 16,
};

export default Default;

import React from "react";
import PropTypes from "prop-types";
import { Typography, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "../box";
import Tooltip from "../tooltip";
import { alpha } from "@mui/material/styles";

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
    fw,
    fs,
    lh,
    center,
    cross,
    crossColor,
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
        sx={{
          fontSize: fs ? fs : fontSize,
          lineHeight: lh ? `${lh}px` : null,
          width: "100%",
          ...sx,
        }}
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
        fontWeight: bold ? "bold" : fw ? fw : null,
        fontSize: fs ? fs : fontSize,
        textAlign: center ? "center" : null,
        lineHeight: lh ? `${lh}px` : null,
        ...(cross && {
          position: "relative",
          "&::before": {
            content: '""',
            borderBottom: (theme) =>
              `2px solid ${alpha(
                crossColor ? crossColor : theme.palette.primary.main,
                0.4
              )}`,
            position: "absolute",
            right: -1,
            height: 2,
            top: "calc(50% - 2px)",
            left: -1,
            transform: "rotate(-12deg)",
          },
        }),
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
  caption: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
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
  cross: PropTypes.bool,
  navigation: PropTypes.string,
  crossColor: PropTypes.string,
  loading: PropTypes.bool,
  bold: PropTypes.bool,
  noWrap: PropTypes.bool,
  allowSelect: PropTypes.bool,
  fontSize: PropTypes.number,
  lh: PropTypes.number,
  fs: PropTypes.number,
  fw: PropTypes.number,
  center: PropTypes.bool,
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
  cross: false,
  crossColor: undefined,
};

export default Default;

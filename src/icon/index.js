import React from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "../tooltip";

const defColor = [
  "action",
  "disabled",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];

const Default = (props) => {
  const {
    textIcon,
    help,
    timeout,
    enterDelay,
    color,
    loading,
    size,
    sx,
    ...other
  } = props;

  if (loading) {
    return <CircularProgress size={size} sx={sx} />;
  }

  const icon = (
    <Icon
      {...other}
      color={defColor.includes(color) ? color : undefined}
      sx={{
        color: !defColor.includes(color) ? color : undefined,
        fontSize: `${size}px !important`,
        minWidth: size,
        minHeight: size,
        ...sx,
      }}
    >
      {textIcon}
    </Icon>
  );

  const component = help ? (
    <Tooltip help={help} timeout={timeout} enterDelay={enterDelay}>
      {icon}
    </Tooltip>
  ) : (
    icon
  );

  return component;
};

Default.propTypes = {
  textIcon: PropTypes.string.isRequired,
  className: PropTypes.string,
  timeout: PropTypes.number,
  enterDelay: PropTypes.number,
  color: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number,
};

Default.defaultProps = {
  className: "material-symbols-rounded",
  timeout: 600,
  enterDelay: 1000,
  loading: false,
  size: 19,
};

export default Default;

import React from "react";
import { Tooltip, Fade } from "@mui/material";
import PropTypes from "prop-types";

const Default = (props) => {
  const { timeout, enterDelay, help, ...other } = props;

  if (!help) {
    return other.children;
  }

  return (
    <Tooltip
      title={help}
      disableInteractive
      TransitionComponent={Fade}
      TransitionProps={{ timeout }}
      enterDelay={enterDelay}
      {...other}
    />
  );
};

Default.propTypes = {
  timeout: PropTypes.number,
  enterDelay: PropTypes.number,
};

Default.defaultProps = {
  timeout: 600,
  enterDelay: 1000,
  help: undefined,
};

export default Default;

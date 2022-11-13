import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Icon from "../icon";
import Text from "../text";
import Tooltip from "../tooltip";

const Default = (props) => {
  const {
    textIcon,
    caption,
    children,
    sxIcon,
    sxText,
    navigation,
    onClick,
    timeout,
    enterDelay,
    sx,
    loading,
    size,
    help,
    ...other
  } = props;

  const navigate = useNavigate();

  const handleOnNavigation = (event) => {
    navigate(navigation);
    event.stopPropagation();
  };

  const component = (
    <Button
      {...other}
      sx={{
        padding: 1,
        "& div": {
          display: textIcon ? "flex" : null,
        },
        ...sx,
      }}
      disabled={loading}
      onClick={navigation ? handleOnNavigation : onClick}
    >
      {loading && (
        <Icon
          loading={loading}
          size={size}
          sx={{
            mr: caption && caption !== "" && 1,
            ...sxIcon,
          }}
        />
      )}
      {textIcon && !loading && (
        <Icon
          textIcon={textIcon}
          size={size}
          sx={{
            mr: caption && caption !== "" && 1,
            ...sxIcon,
          }}
        />
      )}
      <Text caption={caption} sx={{ fontSize: "0.8rem", ...sxText }} />
      {children}
    </Button>
  );

  return (
    <Tooltip help={help} timeout={timeout} enterDelay={enterDelay}>
      {component}
    </Tooltip>
  );
};

Default.propTypes = {
  caption: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  onClick: PropTypes.func,
  textIcon: PropTypes.string,
  loading: PropTypes.bool,
  navigation: PropTypes.string,
  help: PropTypes.string,
  timeout: PropTypes.number,
  enterDelay: PropTypes.number,
  size: PropTypes.number,
};

Default.defaultProps = {
  caption: undefined,
  variant: "contained",
  color: "primary",
  textIcon: undefined,
  loading: false,
  navigation: undefined,
  help: undefined,
  timeout: 600,
  size: 19,
  enterDelay: 1000,
};

export default Default;

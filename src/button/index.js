import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Icon from "../icon";
import Text from "../text";
import Box from "../box";
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
    iconPos,
    classNameIcon,
    sizeButton,
    withOutAnimate,
    placement,
    leaveDelay,
    ...other
  } = props;

  const navigate = useNavigate();

  const handleOnNavigation = (event) => {
    navigate(navigation);
    event.stopPropagation();
  };

  const icon = textIcon ? (
    <Icon
      textIcon={textIcon}
      size={size}
      withOutAnimate={withOutAnimate}
      sx={{
        mr: caption && caption !== "" && iconPos === "left" && 1,
        ml: caption && caption !== "" && iconPos === "right" && 1,
        mt: caption && caption !== "" && iconPos === "bottom" && 1,
        mb: caption && caption !== "" && iconPos === "top" && 1,
        ...sxIcon,
      }}
      className={classNameIcon}
    />
  ) : (
    children
  );

  const text = caption ? (
    typeof caption === "function" ? (
      caption
    ) : (
      <Text caption={caption} sx={{ fontSize: "0.8rem", ...sxText }} />
    )
  ) : null;

  const component = (
    <Button
      size={sizeButton}
      disabled={loading}
      {...other}
      sx={{
        padding: 1,
        verticalAlign: "unset",
        ...(sizeButton === "small" && { py: 0.5, "& p": { fontSize: 13 } }),
        "& div": {
          display: textIcon ? "flex" : null,
        },
        ...sx,
      }}
      onClick={navigation ? handleOnNavigation : onClick}
    >
      {loading && (
        <Icon
          loading={loading}
          textIcon=""
          size={size}
          withOutAnimate={withOutAnimate}
          sx={{
            mr: caption && caption !== "" && 1,
            ...sxIcon,
          }}
        />
      )}
      {!loading && iconPos === "left" && icon}
      {["bottom", "top"].includes(iconPos) ? (
        <Box
          defFlex
          alignItems
          column={iconPos === "top" ? "column" : "column-reverse"}
        >
          {icon}
          {text}
        </Box>
      ) : (
        text
      )}
      {!loading && iconPos === "right" && icon}
    </Button>
  );

  if (!help || loading) {
    return component;
  }

  return (
    <Tooltip
      help={help}
      timeout={timeout}
      enterDelay={enterDelay}
      placement={placement}
      leaveDelay={leaveDelay}
    >
      {component}
    </Tooltip>
  );
};

Default.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    undefined,
  ]),
  iconPos: PropTypes.oneOf(["left", "top", "bottom", "right"]),
  onClick: PropTypes.func,
  textIcon: PropTypes.string,
  loading: PropTypes.bool,
  navigation: PropTypes.string,
  timeout: PropTypes.number,
  leaveDelay: PropTypes.number,
  enterDelay: PropTypes.number,
  size: PropTypes.number,
  withOutAnimate: PropTypes.bool,
};

Default.defaultProps = {
  caption: undefined,
  variant: "contained",
  color: "primary",
  iconPos: "left",
  textIcon: undefined,
  loading: false,
  navigation: undefined,
  help: undefined,
  timeout: 600,
  leaveDelay: 0,
  size: 19,
  enterDelay: 1000,
  withOutAnimate: false,
};

export default Default;

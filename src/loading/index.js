import React from "react";
import PropTypes from "prop-types";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";

const myKeyframe = keyframes`
0% {
  transform: rotate(-45deg);
}
25% {
  transform: rotate(-20deg);
}
75% {
  transform: rotate(-65deg);
}
100% {
  transform: rotate(-45deg);
}
`;

const Styled = styled("div", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})(({ theme, width, height }) => ({
  fill: theme.palette.text.disabled,
  display: "flex",
  height: height,
  minHeight: 200,
  width: width,
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    height: `Calc(${
      typeof height === "string" ? `${200}px` : `${height}px`
    } - 60px)`,
    width: `Calc(${typeof width === "string" ? width : `${width}px`} - 60px)`,
    animationName: myKeyframe,
    animationDuration: "5s",
    transform: "rotate(-45deg)",
    animationDelay: "500ms",
    animationIterationCount: "infinite",
    fill: theme.palette.text.disabled,
  },
}));

const Default = (props) => {
  const { animation, width, height, timeout, enterDelay } = props;

  const icon = (
    <Styled width={width} height={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="512"
        height="512"
      >
        <path d="M1.879,17.878a11.259,11.259,0,0,0-1.835,4,1.739,1.739,0,0,0,2.083,2.082,11.263,11.263,0,0,0,3.994-1.834h0A3,3,0,0,0,1.879,17.878Zm2.828,2.829h0a10.07,10.07,0,0,1-2.6,1.184,10.1,10.1,0,0,1,1.184-2.6,1,1,0,0,1,1.414,1.414ZM18,8.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,18,8.5ZM20.972,0h0A15.487,15.487,0,0,0,8.634,6.006,11.065,11.065,0,0,0,4.065,7.169,8.1,8.1,0,0,0,.243,10.835a2.955,2.955,0,0,0,.25,2.8A3.009,3.009,0,0,0,3.014,15H5.5A3.517,3.517,0,0,1,9,18.5v2.486a3.009,3.009,0,0,0,1.363,2.521,2.955,2.955,0,0,0,2.8.25,8.1,8.1,0,0,0,3.666-3.822,11.065,11.065,0,0,0,1.163-4.569A15.507,15.507,0,0,0,24,3,3.009,3.009,0,0,0,20.972,0ZM4.346,13H3.014a1,1,0,0,1-.85-.461.95.95,0,0,1-.085-.91A6.176,6.176,0,0,1,4.962,8.957a8.993,8.993,0,0,1,1.993-.72A34.361,34.361,0,0,0,4.346,13Zm10.7,6.038a6.18,6.18,0,0,1-2.671,2.883.951.951,0,0,1-.911-.085,1,1,0,0,1-.461-.85V19.654a34.361,34.361,0,0,0,4.763-2.609A8.993,8.993,0,0,1,15.043,19.038Zm.135-4.02a29.92,29.92,0,0,1-4.271,2.471,5.5,5.5,0,0,0-4.4-4.4A29.92,29.92,0,0,1,8.982,8.822C12.35,4.124,15.84,2.147,21,2a1,1,0,0,1,1,.972C21.853,8.16,19.876,11.65,15.178,15.018Z" />
      </svg>
    </Styled>
  );

  if (animation) {
    return (
      <Fade
        in={true}
        timeout={timeout}
        sx={{ transitionDelay: `${enterDelay}ms !important` }}
      >
        {icon}
      </Fade>
    );
  }

  return icon;
};

Default.propTypes = {
  animation: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  timeout: PropTypes.number,
  enterDelay: PropTypes.number,
  loading: PropTypes.bool,
};

Default.defaultProps = {
  animation: true,
  width: "100%",
  height: "100vh",
  timeout: 500,
  enterDelay: 1000,
  loading: false,
};

export default Default;

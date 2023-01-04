import React from "react";
import PropTypes from "prop-types";
import { Zoom, CircularProgress } from "@mui/material";
import Box from "../box";
import Text from "../text";

const Caption = (props) => {
  const { caption, anim, variant, loading, sx } = props;
  return (
    <Zoom in style={{ transitionDelay: anim }} timeout={{ enter: 500 }}>
      <div style={{ zIndex: 1, position: "absolute" }}>
        {loading ? (
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.common.white,
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 16,
              padding: 2,
              color: "black",
              boxShadow: (theme) =>
                `0px 0px 32px 0px ${theme.palette[variant].light}`,
              transition: "all 500ms linear",
              ...sx,
            }}
          >
            <CircularProgress
              size={50}
              thickness={5}
              sx={{
                color: (theme) => theme.palette[variant].light,
              }}
            />
          </Box>
        ) : (
          <Text
            caption={caption}
            sx={{
              backgroundColor: (theme) => theme.palette.common.white,
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 16,
              padding: 1.1,
              color: "black",
              boxShadow: (theme) =>
                `0px 0px 32px 0px ${theme.palette[variant].light}`,
              transition: "all 500ms linear",
              ...sx,
            }}
          />
        )}
      </div>
    </Zoom>
  );
};

const Item = (props) => {
  const { flexGrow = 1, topLeft, bottomRight, variant, anim } = props;
  return (
    <Zoom in style={{ transitionDelay: anim }} timeout={{ enter: 500 }}>
      <div style={{ display: "contents" }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: (theme) => theme.palette[variant].light,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0.5,
            flexGrow: flexGrow,
            borderTopLeftRadius: topLeft ? 40 : 0,
            borderBottomRightRadius: bottomRight ? 40 : 0,
            // boxShadow: `0px 0px 32px -3px ${error ? "#f98383" : "#8bbee2"}`,
            boxShadow: (theme) =>
              `0px 0px 32px -3px ${theme.palette[variant].light}`,
            transition: "all 500ms linear",
          }}
        />
      </div>
    </Zoom>
  );
};

const Default = (props) => {
  const { caption, transitionDelay, loading, variant, sx, sxText } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 2,
        ...sx,
      }}
    >
      <Caption
        anim={`${transitionDelay}ms`}
        variant={variant}
        caption={caption}
        loading={loading}
        sx={sxText}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
          flexWrap: "wrap",
          width: 302,
          gap: 1,
          zIndex: 0,
        }}
      >
        <Item
          anim={`${transitionDelay}ms`}
          variant={variant}
          flexGrow={2}
          topLeft
        />
        <Item anim={`${transitionDelay}ms`} variant={variant} />
        <Item anim={`${transitionDelay}ms`} variant={variant} />
        <Item
          anim={`${transitionDelay}ms`}
          variant={variant}
          flexGrow={2}
          bottomRight
        />
      </Box>
    </Box>
  );
};

Default.propTypes = {
  caption: PropTypes.string,
  transitionDelay: PropTypes.number,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["error", "info", "warning"]),
};

Default.defaultProps = {
  caption: "SACRED APP's",
  transitionDelay: 500,
  loading: false,
  variant: "info",
};

export default Default;

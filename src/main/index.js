import React from "react";
import PropTypes from "prop-types";
import { Zoom, CircularProgress } from "@mui/material";
import Box from "../box";
import Text from "../text";

const Caption = (props) => {
  const { caption, anim, error, loading } = props;
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
                `0px 0px 32px 0px ${
                  error
                    ? theme.palette.error.light
                    : theme.palette.primary.light
                }`,
              transition: "all 500ms linear",
            }}
          >
            <CircularProgress
              size={50}
              thickness={5}
              sx={{
                color: (theme) =>
                  error ? theme.palette.error.light : theme.palette.info.light,
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
                `0px 0px 32px 0px ${
                  error ? theme.palette.error.light : theme.palette.info.light
                }`,
              transition: "all 500ms linear",
            }}
          />
        )}
      </div>
    </Zoom>
  );
};

const Item = (props) => {
  const { flexGrow = 1, topLeft, bottomRight, error, anim } = props;
  return (
    <Zoom in style={{ transitionDelay: anim }} timeout={{ enter: 500 }}>
      <div style={{ display: "contents" }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: (theme) =>
              error ? theme.palette.error.light : theme.palette.info.light,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0.5,
            flexGrow: flexGrow,
            borderTopLeftRadius: topLeft ? 40 : 0,
            borderBottomRightRadius: bottomRight ? 40 : 0,
            // boxShadow: `0px 0px 32px -3px ${error ? "#f98383" : "#8bbee2"}`,
            boxShadow: (theme) =>
              `0px 0px 32px -3px ${
                error ? theme.palette.error.light : theme.palette.info.main
              }`,
            transition: "all 500ms linear",
          }}
        />
      </div>
    </Zoom>
  );
};

const Default = (props) => {
  const { caption, error, transitionDelay, loading, sx } = props;

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
        error={error}
        caption={caption}
        loading={loading}
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
          error={error}
          flexGrow={2}
          topLeft
        />
        <Item anim={`${transitionDelay}ms`} error={error} />
        <Item anim={`${transitionDelay}ms`} error={error} />
        <Item
          anim={`${transitionDelay}ms`}
          error={error}
          flexGrow={2}
          bottomRight
        />
      </Box>
    </Box>
  );
};

Default.propTypes = {
  caption: PropTypes.string,
  error: PropTypes.bool,
  transitionDelay: PropTypes.number,
  loading: PropTypes.bool,
};

Default.defaultProps = {
  caption: "GALERA IT",
  error: false,
  transitionDelay: 500,
  loading: false,
};

export default Default;

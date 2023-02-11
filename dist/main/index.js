"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _box = _interopRequireDefault(require("../box"));
var _text = _interopRequireDefault(require("../text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Caption = function Caption(props) {
  var caption = props.caption,
    anim = props.anim,
    variant = props.variant,
    loading = props.loading,
    sx = props.sx;
  return /*#__PURE__*/_react["default"].createElement(_material.Zoom, {
    "in": true,
    style: {
      transitionDelay: anim
    },
    timeout: {
      enter: 500
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      zIndex: 1,
      position: "absolute"
    }
  }, loading ? /*#__PURE__*/_react["default"].createElement(_box["default"], {
    sx: _objectSpread({
      backgroundColor: function backgroundColor(theme) {
        return theme.palette.common.white;
      },
      borderTopLeftRadius: 16,
      borderBottomRightRadius: 16,
      padding: 2,
      color: "black",
      boxShadow: function boxShadow(theme) {
        return "0px 0px 32px 0px ".concat(theme.palette[variant].light);
      },
      transition: "all 500ms linear"
    }, sx)
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 50,
    thickness: 5,
    sx: {
      color: function color(theme) {
        return theme.palette[variant].light;
      }
    }
  })) : /*#__PURE__*/_react["default"].createElement(_text["default"], {
    caption: caption,
    sx: _objectSpread({
      backgroundColor: function backgroundColor(theme) {
        return theme.palette.common.white;
      },
      borderTopLeftRadius: 16,
      borderBottomRightRadius: 16,
      padding: 1.1,
      color: "black",
      boxShadow: function boxShadow(theme) {
        return "0px 0px 32px 0px ".concat(theme.palette[variant].light);
      },
      transition: "all 500ms linear"
    }, sx)
  })));
};
var Item = function Item(props) {
  var _props$flexGrow = props.flexGrow,
    flexGrow = _props$flexGrow === void 0 ? 1 : _props$flexGrow,
    topLeft = props.topLeft,
    bottomRight = props.bottomRight,
    variant = props.variant,
    anim = props.anim;
  return /*#__PURE__*/_react["default"].createElement(_material.Zoom, {
    "in": true,
    style: {
      transitionDelay: anim
    },
    timeout: {
      enter: 500
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "contents"
    }
  }, /*#__PURE__*/_react["default"].createElement(_box["default"], {
    sx: {
      width: 100,
      height: 100,
      backgroundColor: function backgroundColor(theme) {
        return theme.palette[variant].light;
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 0.5,
      flexGrow: flexGrow,
      borderTopLeftRadius: topLeft ? 40 : 0,
      borderBottomRightRadius: bottomRight ? 40 : 0,
      // boxShadow: `0px 0px 32px -3px ${error ? "#f98383" : "#8bbee2"}`,
      boxShadow: function boxShadow(theme) {
        return "0px 0px 32px -3px ".concat(theme.palette[variant].light);
      },
      transition: "all 500ms linear"
    }
  })));
};
var Default = function Default(props) {
  var caption = props.caption,
    transitionDelay = props.transitionDelay,
    loading = props.loading,
    variant = props.variant,
    sx = props.sx,
    sxText = props.sxText;
  return /*#__PURE__*/_react["default"].createElement(_box["default"], {
    sx: _objectSpread({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: 2
    }, sx)
  }, /*#__PURE__*/_react["default"].createElement(Caption, {
    anim: "".concat(transitionDelay, "ms"),
    variant: variant,
    caption: caption,
    loading: loading,
    sx: sxText
  }), /*#__PURE__*/_react["default"].createElement(_box["default"], {
    sx: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "row",
      flexWrap: "wrap",
      width: 302,
      gap: 1,
      zIndex: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(Item, {
    anim: "".concat(transitionDelay, "ms"),
    variant: variant,
    flexGrow: 2,
    topLeft: true
  }), /*#__PURE__*/_react["default"].createElement(Item, {
    anim: "".concat(transitionDelay, "ms"),
    variant: variant
  }), /*#__PURE__*/_react["default"].createElement(Item, {
    anim: "".concat(transitionDelay, "ms"),
    variant: variant
  }), /*#__PURE__*/_react["default"].createElement(Item, {
    anim: "".concat(transitionDelay, "ms"),
    variant: variant,
    flexGrow: 2,
    bottomRight: true
  })));
};
Default.propTypes = {
  caption: _propTypes["default"].string,
  transitionDelay: _propTypes["default"].number,
  loading: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(["error", "info", "warning"])
};
Default.defaultProps = {
  caption: "SACRED APP's",
  transitionDelay: 500,
  loading: false,
  variant: "info"
};
var _default = Default;
exports["default"] = _default;
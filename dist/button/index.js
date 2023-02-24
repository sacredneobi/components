"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _icon = _interopRequireDefault(require("../icon"));
var _text = _interopRequireDefault(require("../text"));
var _box = _interopRequireDefault(require("../box"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _excluded = ["textIcon", "caption", "children", "sxIcon", "sxText", "navigation", "onClick", "timeout", "enterDelay", "sx", "loading", "size", "help", "iconPos", "classNameIcon", "sizeButton", "withOutAnimate", "placement", "leaveDelay"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var textIcon = props.textIcon,
    caption = props.caption,
    children = props.children,
    sxIcon = props.sxIcon,
    sxText = props.sxText,
    navigation = props.navigation,
    onClick = props.onClick,
    timeout = props.timeout,
    enterDelay = props.enterDelay,
    sx = props.sx,
    loading = props.loading,
    size = props.size,
    help = props.help,
    iconPos = props.iconPos,
    classNameIcon = props.classNameIcon,
    sizeButton = props.sizeButton,
    withOutAnimate = props.withOutAnimate,
    placement = props.placement,
    leaveDelay = props.leaveDelay,
    other = _objectWithoutProperties(props, _excluded);
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleOnNavigation = function handleOnNavigation(event) {
    navigate(navigation);
    event.stopPropagation();
  };
  var icon = textIcon ? /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    textIcon: textIcon,
    size: size,
    withOutAnimate: withOutAnimate,
    sx: _objectSpread({
      mr: caption && caption !== "" && iconPos === "left" && 1,
      ml: caption && caption !== "" && iconPos === "right" && 1,
      mt: caption && caption !== "" && iconPos === "bottom" && 1,
      mb: caption && caption !== "" && iconPos === "top" && 1
    }, sxIcon),
    className: classNameIcon
  }) : children;
  var text = caption ? typeof caption === "function" ? caption : /*#__PURE__*/_react["default"].createElement(_text["default"], {
    caption: caption,
    sx: _objectSpread({
      fontSize: "0.8rem"
    }, sxText)
  }) : null;
  var component = /*#__PURE__*/_react["default"].createElement(_material.Button, _extends({
    size: sizeButton,
    disabled: loading
  }, other, {
    sx: _objectSpread(_objectSpread({
      padding: 1,
      verticalAlign: "unset"
    }, sizeButton === "small" && {
      py: 0.5,
      "& p": {
        fontSize: 13
      }
    }), {}, {
      "& div": {
        display: textIcon ? "flex" : null
      }
    }, sx),
    onClick: navigation ? handleOnNavigation : onClick
  }), loading && /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    loading: loading,
    textIcon: "",
    size: size,
    withOutAnimate: withOutAnimate,
    sx: _objectSpread({
      mr: caption && caption !== "" && 1
    }, sxIcon)
  }), !loading && iconPos === "left" && icon, ["bottom", "top"].includes(iconPos) ? /*#__PURE__*/_react["default"].createElement(_box["default"], {
    defFlex: true,
    alignItems: true,
    column: iconPos === "top" ? "column" : "column-reverse"
  }, icon, text) : text, !loading && iconPos === "right" && icon);
  if (!help || loading) {
    return component;
  }
  return /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    help: help,
    timeout: timeout,
    enterDelay: enterDelay,
    placement: placement,
    leaveDelay: leaveDelay
  }, component);
};
Default.propTypes = {
  caption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  variant: _propTypes["default"].oneOf(["contained", "outlined", "text"]),
  color: _propTypes["default"].oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  placement: _propTypes["default"].oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", undefined]),
  iconPos: _propTypes["default"].oneOf(["left", "top", "bottom", "right"]),
  onClick: _propTypes["default"].func,
  textIcon: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  navigation: _propTypes["default"].string,
  timeout: _propTypes["default"].number,
  leaveDelay: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number,
  size: _propTypes["default"].number,
  withOutAnimate: _propTypes["default"].bool
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
  withOutAnimate: false
};
var _default = Default;
exports["default"] = _default;
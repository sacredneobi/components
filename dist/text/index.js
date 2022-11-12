"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
var _box = _interopRequireDefault(require("../box"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _excluded = ["caption", "checkRender", "loading", "sx", "children", "color", "help", "navigation", "allowSelect", "noWrap", "onClick", "bold", "timeout", "enterDelay", "fontSize"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var caption = props.caption,
    checkRender = props.checkRender,
    loading = props.loading,
    sx = props.sx,
    children = props.children,
    _color = props.color,
    help = props.help,
    navigation = props.navigation,
    allowSelect = props.allowSelect,
    noWrap = props.noWrap,
    onClick = props.onClick,
    bold = props.bold,
    timeout = props.timeout,
    enterDelay = props.enterDelay,
    fontSize = props.fontSize,
    other = _objectWithoutProperties(props, _excluded);
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleOnNavigation = function handleOnNavigation(event) {
    navigate(navigation);
    event.stopPropagation();
  };
  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_material.Skeleton, _extends({
      variant: "text"
    }, other, {
      sx: _objectSpread({
        fontSize: fontSize,
        width: "100%"
      }, sx)
    }));
  }
  var item = /*#__PURE__*/_react["default"].createElement(_material.Typography, _extends({
    noWrap: noWrap,
    sx: _objectSpread({
      userSelect: allowSelect ? "unset" : "none",
      color: function color(theme) {
        return theme.palette.text[_color];
      },
      whiteSpace: noWrap ? null : "pre-line",
      fontWeight: bold && "bold",
      fontSize: fontSize
    }, sx),
    onClick: navigation ? handleOnNavigation : onClick
  }, other), caption, children);
  if (typeof checkRender === "function") {
    return checkRender() ? item : /*#__PURE__*/_react["default"].createElement(_box["default"], other);
  }
  return /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    help: help,
    timeout: timeout,
    enterDelay: enterDelay
  }, item);
};
Default.propTypes = {
  caption: _propTypes["default"].string.isRequired,
  help: _propTypes["default"].string,
  timeout: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number,
  color: _propTypes["default"].oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  navigation: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  bold: _propTypes["default"].bool,
  noWrap: _propTypes["default"].bool,
  allowSelect: _propTypes["default"].bool,
  fontSize: _propTypes["default"].number
};
Default.defaultProps = {
  timeout: 600,
  enterDelay: 1000,
  loading: false,
  bold: false,
  noWrap: false,
  allowSelect: false,
  navigation: undefined,
  fontSize: 16
};
var _default = Default;
exports["default"] = _default;
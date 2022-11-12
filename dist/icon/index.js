"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _excluded = ["textIcon", "help", "withOutAnimate", "timeout", "enterDelay", "color", "loading", "size", "sx"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var textIcon = props.textIcon,
    help = props.help,
    withOutAnimate = props.withOutAnimate,
    timeout = props.timeout,
    enterDelay = props.enterDelay,
    color = props.color,
    loading = props.loading,
    size = props.size,
    sx = props.sx,
    other = _objectWithoutProperties(props, _excluded);
  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: size,
      sx: sx
    });
  }
  var icon = /*#__PURE__*/_react["default"].createElement(_material.Icon, _extends({}, other, {
    sx: _objectSpread({
      color: color,
      fontSize: "".concat(size, "px !important"),
      minWidth: size,
      minHeight: size
    }, sx)
  }), textIcon);
  var component = /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    help: help,
    timeout: timeout,
    enterDelay: enterDelay
  }, icon);
  if (withOutAnimate) {
    return component;
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Fade, {
    "in": true,
    timeout: {
      enter: timeout
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, component));
};
Default.propTypes = {
  textIcon: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  withOutAnimate: _propTypes["default"].bool,
  help: _propTypes["default"].string,
  timeout: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number,
  color: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  size: _propTypes["default"].number
};
Default.defaultProps = {
  className: "material-symbols-rounded",
  timeout: 600,
  enterDelay: 1000,
  loading: false,
  size: 19
};
var _default = Default;
exports["default"] = _default;
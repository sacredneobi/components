"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _excluded = ["width", "widthFull"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var width = props.width,
    widthFull = props.widthFull,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_material.Skeleton, _extends({
    width: widthFull ? "100%" : width
  }, other));
};
Default.propTypes = {
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  widthFull: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(["circular", "rectangular", "rounded", "text"]),
  animation: _propTypes["default"].oneOf(["pulse", "wave"])
};
Default.defaultProps = {
  widthFull: true,
  width: 100,
  height: 200,
  loading: false,
  variant: "text",
  animation: "pulse"
};
var _default = Default;
exports["default"] = _default;
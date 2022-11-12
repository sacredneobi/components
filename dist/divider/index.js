"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _box = _interopRequireDefault(require("../box"));
var _excluded = ["sxBox", "fix"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var sxBox = props.sxBox,
    fix = props.fix,
    other = _objectWithoutProperties(props, _excluded);
  if (fix) {
    return /*#__PURE__*/_react["default"].createElement(_box["default"], {
      sx: sxBox
    }, /*#__PURE__*/_react["default"].createElement(_material.Divider, other));
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Divider, other);
};
Default.propTypes = {
  fix: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  flexItem: _propTypes["default"].bool,
  light: _propTypes["default"].bool,
  orientation: _propTypes["default"].oneOf(["horizontal", "vertical"]),
  textAlign: _propTypes["default"].oneOf(["center", "left", "right"]),
  variant: _propTypes["default"].oneOf(["fullWidth", "inset", "middle"])
};
Default.defaultProps = {
  fix: false,
  flexItem: false,
  light: false,
  loading: false,
  orientation: "horizontal",
  textAlign: "center",
  variant: "fullWidth"
};
var _default = Default;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["timeout", "enterDelay", "help"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var timeout = props.timeout,
    enterDelay = props.enterDelay,
    help = props.help,
    other = _objectWithoutProperties(props, _excluded);
  if (!help) {
    return other.children;
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, _extends({
    title: help,
    disableInteractive: true,
    TransitionComponent: _material.Fade,
    TransitionProps: {
      timeout: timeout
    },
    enterDelay: enterDelay
  }, other));
};
Default.propTypes = {
  timeout: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number
};
Default.defaultProps = {
  timeout: 600,
  enterDelay: 1000,
  help: undefined
};
var _default = Default;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _excluded = ["defFlex", "flex", "column", "row", "grow", "sx", "nowrap", "alignItems", "name", "center", "overflow", "gap", "heightFull", "heightVH", "widthFull", "justifyContent", "loading", "ai", "jc"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Default = function Default(props) {
  var defFlex = props.defFlex,
    flex = props.flex,
    column = props.column,
    row = props.row,
    grow = props.grow,
    sx = props.sx,
    nowrap = props.nowrap,
    alignItems = props.alignItems,
    name = props.name,
    center = props.center,
    overflow = props.overflow,
    gap = props.gap,
    heightFull = props.heightFull,
    heightVH = props.heightVH,
    widthFull = props.widthFull,
    justifyContent = props.justifyContent,
    loading = props.loading,
    ai = props.ai,
    jc = props.jc,
    other = _objectWithoutProperties(props, _excluded);
  var sxFlex = {};
  if (defFlex) {
    (sx ? sx : sxFlex).display = "flex";
    (sx ? sx : sxFlex).flexDirection = "column";
    if (!(sx ? sx : sxFlex).flexWrap) {
      (sx ? sx : sxFlex).flexWrap = "nowrap";
    }
  }
  if (center) {
    (sx ? sx : sxFlex).justifyContent = "center";
    (sx ? sx : sxFlex).alignItems = "center";
  }
  if (heightFull) {
    (sx ? sx : sxFlex).height = "100%";
  }
  if (heightVH) {
    (sx ? sx : sxFlex).height = "100vh";
  }
  if (widthFull) {
    (sx ? sx : sxFlex).width = "100%";
  }
  if (overflow) {
    (sx ? sx : sxFlex).overflow = "auto";
  }
  if (flex) {
    (sx ? sx : sxFlex).display = "flex";
  }
  if (column) {
    (sx ? sx : sxFlex).flexDirection = typeof column === "boolean" ? "column" : column;
  }
  if (row) {
    (sx ? sx : sxFlex).flexDirection = "row";
  }
  if (grow) {
    (sx ? sx : sxFlex).flexGrow = typeof grow === "boolean" ? 1 : parseInt(grow);
  }
  if (gap) {
    (sx ? sx : sxFlex).gap = typeof gap === "boolean" ? 1 : parseFloat(gap);
  }
  if (alignItems || ai) {
    if (alignItems) {
      (sx ? sx : sxFlex).alignItems = typeof alignItems === "boolean" ? "center" : alignItems;
    } else {
      (sx ? sx : sxFlex).alignItems = typeof ai === "boolean" ? "center" : ai;
    }
  }
  if (justifyContent || jc) {
    if (justifyContent) {
      (sx ? sx : sxFlex).justifyContent = typeof justifyContent === "boolean" ? "center" : justifyContent;
    } else {
      (sx ? sx : sxFlex).justifyContent = typeof jc === "boolean" ? "center" : jc;
    }
  }
  if (nowrap) {
    (sx ? sx : sxFlex).flexWrap = "nowrap";
  }
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    name: name,
    sx: _objectSpread(_objectSpread({}, sxFlex), sx)
  }, other));
};
Default.propTypes = {
  defFlex: _propTypes["default"].bool,
  flex: _propTypes["default"].bool,
  column: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  row: _propTypes["default"].bool,
  grow: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  nowrap: _propTypes["default"].bool,
  alignItems: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  ai: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  name: _propTypes["default"].string,
  center: _propTypes["default"].bool,
  overflow: _propTypes["default"].bool,
  gap: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string, _propTypes["default"].number]),
  heightFull: _propTypes["default"].bool,
  heightVH: _propTypes["default"].bool,
  widthFull: _propTypes["default"].bool,
  justifyContent: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  jc: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  loading: _propTypes["default"].bool
};
Default.defaultProps = {
  loading: false,
  defFlex: false,
  flex: false,
  column: false,
  row: false,
  nowrap: false,
  center: false,
  widthFull: false,
  heightVH: false,
  heightFull: false,
  overflow: false
};
var _default = Default;
exports["default"] = _default;
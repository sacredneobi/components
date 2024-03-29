"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _box = _interopRequireDefault(require("../box"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _styles = require("@mui/material/styles");
var _excluded = ["caption", "checkRender", "loading", "sx", "children", "color", "help", "navigation", "allowSelect", "noWrap", "onClick", "bold", "timeout", "enterDelay", "fontSize", "fw", "fs", "lh", "center", "cross", "crossColor"];
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
    fw = props.fw,
    fs = props.fs,
    lh = props.lh,
    center = props.center,
    cross = props.cross,
    crossColor = props.crossColor,
    other = _objectWithoutProperties(props, _excluded);

  // const navigate = useNavigate();

  var handleOnNavigation = function handleOnNavigation(event) {
    // navigate(navigation);
    event.stopPropagation();
  };
  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], _extends({
      variant: "text"
    }, other, {
      sx: _objectSpread({
        fontSize: fs ? fs : fontSize,
        lineHeight: lh ? "".concat(lh, "px") : null,
        width: "100%",
        transform: "unset"
      }, sx)
    }));
  }
  var item = /*#__PURE__*/_react["default"].createElement(_Typography["default"], _extends({
    noWrap: noWrap,
    sx: _objectSpread(_objectSpread({
      userSelect: allowSelect ? "unset" : "none",
      color: function color(theme) {
        return theme.palette.text[_color];
      },
      whiteSpace: noWrap ? null : "pre-line",
      fontWeight: bold ? "bold" : fw ? fw : null,
      fontSize: fs ? fs : fontSize,
      textAlign: center ? "center" : null,
      lineHeight: lh ? "".concat(lh, "px") : null
    }, cross && {
      position: "relative",
      "&::before": {
        content: '""',
        borderBottom: function borderBottom(theme) {
          return "2px solid ".concat((0, _styles.alpha)(crossColor ? crossColor : theme.palette.primary.main, 0.4));
        },
        position: "absolute",
        right: -1,
        height: 2,
        top: "calc(50% - 2px)",
        left: -1,
        transform: "rotate(-12deg)"
      }
    }), sx),
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
  caption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]).isRequired,
  timeout: _propTypes["default"].number,
  enterDelay: _propTypes["default"].number,
  color: _propTypes["default"].oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),
  cross: _propTypes["default"].bool,
  navigation: _propTypes["default"].string,
  crossColor: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  bold: _propTypes["default"].bool,
  noWrap: _propTypes["default"].bool,
  allowSelect: _propTypes["default"].bool,
  fontSize: _propTypes["default"].number,
  lh: _propTypes["default"].number,
  fs: _propTypes["default"].number,
  fw: _propTypes["default"].number,
  center: _propTypes["default"].bool
};
Default.defaultProps = {
  timeout: 600,
  enterDelay: 1000,
  loading: false,
  bold: false,
  noWrap: false,
  allowSelect: false,
  navigation: undefined,
  fontSize: 16,
  cross: false,
  crossColor: undefined
};
var _default = Default;
exports["default"] = _default;
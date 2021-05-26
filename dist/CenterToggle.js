"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterToggleContainer = CenterToggleContainer;
exports.CenterToggleChild = exports.CenterToggleItem = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CenterToggleContainer(props) {
  var itemChild, childrenChild;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      boundingBoxTop = _useState2[0],
      setBoundingBoxTop = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      boundingBoxLeft = _useState4[0],
      setBoundingBoxLeft = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      boundingBoxHeight = _useState6[0],
      setBoundingBoxHeight = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      boundingBoxWidth = _useState8[0],
      setBoundingBoxWidth = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      itemHeight = _useState10[0],
      setItemHeight = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      itemWidth = _useState12[0],
      setItemWidth = _useState12[1];

  var childrenRef = (0, _react.useRef)(null);
  var itemRef = /*#__PURE__*/(0, _react.createRef)(null);

  var _iterator = _createForOfIteratorHelper(props.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;

      if (child.type === CenterToggleItem) {
        itemChild = child;
      } else if (child.type === CenterToggleChild) {
        childrenChild = child;
      } else {
        console.error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChildren'.");
        throw new Error("CenterToggleContainer can only have two children of type 'CenterToggleItem' and 'CenterToggleChildren'.");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  (0, _react.useEffect)(function () {
    if (childrenRef.current && itemRef.current) {
      setBoundingBoxHeight(childrenRef.current.offsetHeight);
      setBoundingBoxWidth(childrenRef.current.offsetWidth);
      setBoundingBoxTop(childrenRef.current.offsetTop);
      setBoundingBoxLeft(childrenRef.current.offsetLeft);

      if (itemRef.current.offsetHeight !== 0 && itemRef.current.offsetWidth !== 0) {
        setItemHeight(itemRef.current.offsetHeight);
        setItemWidth(itemRef.current.offsetWidth);
      }
    }
  }, [childrenRef, itemRef]);
  (0, _react.useEffect)(function () {
    if (props.toggled) {}
  }, [props.toggled]);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(itemChild.type, _extends({}, itemChild.props, {
    toggled: props.toggled,
    boundingBox: {
      boundingBoxTop: boundingBoxTop,
      boundingBoxLeft: boundingBoxLeft,
      boundingBoxHeight: boundingBoxHeight,
      boundingBoxWidth: boundingBoxWidth,
      itemHeight: itemHeight,
      itemWidth: itemWidth
    },
    ref: itemRef
  })), /*#__PURE__*/_react["default"].createElement(childrenChild.type, _extends({}, childrenChild.props, {
    ref: childrenRef
  })));
}

var CenterToggleItem = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _props$boundingBox = props.boundingBox,
      boundingBoxTop = _props$boundingBox.boundingBoxTop,
      boundingBoxLeft = _props$boundingBox.boundingBoxLeft,
      boundingBoxHeight = _props$boundingBox.boundingBoxHeight,
      boundingBoxWidth = _props$boundingBox.boundingBoxWidth,
      itemHeight = _props$boundingBox.itemHeight,
      itemWidth = _props$boundingBox.itemWidth;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: {
      position: 'absolute',
      top: boundingBoxTop + boundingBoxHeight / 2 - itemHeight / 2,
      left: boundingBoxLeft + boundingBoxWidth / 2 - itemWidth / 2,
      visibility: itemHeight === 0 && itemWidth === 0 ? 'hidden' : 'visible'
    }
  }, (props.toggled || itemHeight === 0 && itemWidth === 0) && props.children);
});
exports.CenterToggleItem = CenterToggleItem;
var CenterToggleChild = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var child;

  try {
    child = _react.Children.only(props.children);
  } catch (err) {
    console.error(err);
    throw err;
  }

  return /*#__PURE__*/_react["default"].createElement(child.type, _extends({
    ref: ref
  }, child.props));
});
exports.CenterToggleChild = CenterToggleChild;
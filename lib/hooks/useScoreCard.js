"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreCardProvider = void 0;
exports.useScoreCard = useScoreCard;
var _react = require("react");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ADD_MESSAGE_COLOR = '#3d84b8';
var REGULAR_MESSAGE_COLOR = '#2b2e4a';
var ERROR_MESSAGE_COLOR = '#fb3640';
var ScoreCardContext = /*#__PURE__*/(0, _react.createContext)({
  messages: [],
  addCardMessage: function addCardMessage() {},
  addRegularMessage: function addRegularMessage() {},
  addErrorMessage: function addErrorMessage() {}
});
var makeMessage = function makeMessage(message, color) {
  return {
    message: message,
    color: color
  };
};
var ScoreCardProvider = function ScoreCardProvider(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var addCardMessage = function addCardMessage(message) {
    setMessages([].concat(_toConsumableArray(messages), [makeMessage(message, ADD_MESSAGE_COLOR)]));
  };
  var addRegularMessage = function addRegularMessage() {
    for (var _len = arguments.length, ms = new Array(_len), _key = 0; _key < _len; _key++) {
      ms[_key] = arguments[_key];
    }
    setMessages([].concat(_toConsumableArray(messages), _toConsumableArray(ms.map(function (m) {
      return makeMessage(m, REGULAR_MESSAGE_COLOR);
    }))));
  };
  var addErrorMessage = function addErrorMessage(message) {
    setMessages([].concat(_toConsumableArray(messages), [makeMessage(message, ERROR_MESSAGE_COLOR)]));
  };
  var clearMessage = function clearMessage(message) {
    setMessages(function (state) {
      return [makeMessage(message, REGULAR_MESSAGE_COLOR)];
    });
  };
  return /*#__PURE__*/React.createElement(ScoreCardContext.Provider, _extends({
    value: {
      messages: messages,
      addCardMessage: addCardMessage,
      addRegularMessage: addRegularMessage,
      addErrorMessage: addErrorMessage,
      clearMessage: clearMessage
    }
  }, props));
};
exports.ScoreCardProvider = ScoreCardProvider;
function useScoreCard() {
  return (0, _react.useContext)(ScoreCardContext);
}
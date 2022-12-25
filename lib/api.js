"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var instance = _axios.default.create({
  baseURL: "http://localhost:4000/"
});
var _default = instance; // instance.get('/hi').then((data) => console.log(data));
exports.default = _default;
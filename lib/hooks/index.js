"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useStyles = require("./useStyles");
Object.keys(_useStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useStyles[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useStyles[key];
    }
  });
});
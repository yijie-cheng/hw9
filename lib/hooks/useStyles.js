"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;
var _index = require("@material-ui/core/styles/index.js");
// resource: https://material-ui.com/styles/basics/

var useStyles = (0, _index.makeStyles)({
  input: {
    margin: '0 0.2em'
  },
  button: {
    width: '100px',
    marginLeft: '0.6em'
  }
});
exports.useStyles = useStyles;
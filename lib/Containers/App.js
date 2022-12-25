"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Header = _interopRequireDefault(require("./Header.js"));
var _Body = _interopRequireDefault(require("./Body.js"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = _interopRequireDefault(require("@material-ui/core/Paper/index.js"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));

// const StyledPaper = styled(Paper)`
//   padding: 2em;
// `;

var StyledPaper = function StyledPaper() {
  return _index.default;
};
function App() {
  return (
    /*#__PURE__*/
    // <Wrapper>
    //   <Paper elevation="3">
    //     <Header />
    //     <Body />
    //   </Paper>
    // </Wrapper>
    React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_Body.default, null))
  );
}
var _default = App;
exports.default = _default;
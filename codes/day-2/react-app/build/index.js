define(["./App", "react-dom"], function (_App, _reactDom) {
  "use strict";

  _App = _interopRequireDefault(_App);
  _reactDom = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var appElement = (0, _App["default"])();
  var placeHolder = document.getElementById('root');

  _reactDom["default"].render(appElement, placeHolder);
});
define(["./app"], function (_app) {
  "use strict";

  _app = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var appElement = (0, _app["default"])();
  var placeHolder = document.getElementById('root');
  placeHolder.appendChild(appElement);
});
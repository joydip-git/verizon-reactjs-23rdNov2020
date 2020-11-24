define(["exports", "./webcomponentheader", "./webcomponentpara"], function (_exports, _webcomponentheader, _webcomponentpara) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _webcomponentheader = _interopRequireDefault(_webcomponentheader);
  _webcomponentpara = _interopRequireDefault(_webcomponentpara);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var app = function app() {
    var headerElement = (0, _webcomponentheader["default"])();
    var paraElement = (0, _webcomponentpara["default"])();
    var appDesign = document.createElement('article', {
      id: 'mainArticle'
    });
    appDesign.appendChild(headerElement);
    appDesign.appendChild(paraElement);
    return appDesign;
  };

  var _default = app;
  _exports["default"] = _default;
});
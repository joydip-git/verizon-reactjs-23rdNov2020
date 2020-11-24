define(["exports", "./WebComponentHeader", "./WebComponentPara", "react"], function (_exports, _WebComponentHeader, _WebComponentPara, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _WebComponentHeader = _interopRequireDefault(_WebComponentHeader);
  _WebComponentPara = _interopRequireDefault(_WebComponentPara);
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var App = function App() {
    var headerContent = 'Introduction to Web Components';
    var paraContent = "Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.\n\n    Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.";

    var sayHi = function sayHi() {
      window.alert('welcome to web component');
    };

    var headerElement = (0, _WebComponentHeader["default"])({
      headerData: headerContent,
      value: 10,
      handler: sayHi
    });
    var paraElement = (0, _WebComponentPara["default"])({
      paraData: paraContent,
      data: 'joydip',
      caller: sayHi
    });

    var appDesign = _react["default"].createElement('article', {
      id: 'mainArticle'
    }, [headerElement, paraElement]);

    return appDesign;
  };

  var _default = App;
  _exports["default"] = _default;
});
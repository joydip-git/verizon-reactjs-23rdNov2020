define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var WebComponentHeader = function WebComponentHeader(args) {
    var headerStyle = {
      backgroundColor: 'burlywood',
      fontFamily: 'Segoe UI',
      border: '1px solid blue',
      borderRadius: '2px'
    };

    var headerElement = _react["default"].createElement('h3', {
      id: 'mainHeader',
      style: headerStyle
    }, args.headerData);

    var valueChildElements = [_react["default"].createElement('br'), "Value&nbsp;".concat(args.value)];

    var valueElement = _react["default"].createElement('span', {
      id: 'valueSpan'
    }, valueChildElements);

    var rootElement = _react["default"].createElement('div', {
      onMouseOver: args.handler
    }, [headerElement, valueElement]);

    return rootElement;
  };

  var _default = WebComponentHeader;
  _exports["default"] = _default;
});
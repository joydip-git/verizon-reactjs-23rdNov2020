define(["exports", "react"], function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var WebComponentPara = function WebComponentPara(args) {
    var paraStyle = {
      backgroundColor: 'beige',
      fontFamily: 'Segoe UI',
      fontSize: 'medium',
      border: '1px solid blue',
      borderRadius: '2px',
      margin: '10px'
    };

    var paraElement = _react["default"].createElement('p', {
      id: 'contentPara',
      onClick: args.caller,
      style: paraStyle
    }, args.paraData);

    return paraElement;
  };

  var _default = WebComponentPara;
  _exports["default"] = _default;
});
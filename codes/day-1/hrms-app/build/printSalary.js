define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.add = void 0;

  var printSalary = function printSalary(printSalaryFnRef) {
    return printSalaryFnRef();
  };

  var add = function add(a, b) {
    return a + b;
  };

  _exports.add = add;
  var _default = printSalary; // module.exports = printSalary;

  _exports["default"] = _default;
});
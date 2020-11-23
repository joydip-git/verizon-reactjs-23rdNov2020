function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define(["./developer", "./hr", "./printSalary"], function (_developer, _hr, _printSalary) {
  "use strict";

  _printSalary = _interopRequireWildcard(_printSalary);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  // const developerModule = require('./developer')
  // const hrModule = require('./hr')
  // const salaryFn = require('./printSalary')
  var employees = []; // const anilDeveloper = new developerModule.developer('sunil', 1, 1000, 2000, 3000, 4000);
  // const sunilHr = new hrModule.hr('anil', 2, 1500, 2500, 3500, 4500);

  var anilDeveloper = new _developer.developer('sunil', 1, 1000, 2000, 3000, 4000);
  var sunilHr = new _hr.hr('anil', 2, 1500, 2500, 3500, 4500);
  employees.push(anilDeveloper);
  employees.push(sunilHr);
  var appDiv = document.getElementById('app');

  for (var i = 0; i < employees.length; i++) {
    var employeeSalary = (0, _printSalary["default"])(employees[i].calculateSalary);
    console.log(employeeSalary);
    appDiv.innerHTML += employeeSalary;
    appDiv.innerHTML += '<br/>';
  }

  console.log((0, _printSalary.add)(10, 20));
});
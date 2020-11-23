define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.employee = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var employee = /*#__PURE__*/function () {
    function employee(name, id, basic, da, hra) {
      _classCallCheck(this, employee);

      _defineProperty(this, "name", void 0);

      _defineProperty(this, "id", void 0);

      _defineProperty(this, "basicPayment", void 0);

      _defineProperty(this, "daPayment", void 0);

      _defineProperty(this, "hraPayment", void 0);

      this.basicPayment = basic;
      this.daPayment = da;
      this.hraPayment = hra;
      this.name = name;
      this.id = id;
    }

    _createClass(employee, [{
      key: "calculateSalary",
      value: function calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment;
      }
    }]);

    return employee;
  }(); //const check = () => console.log('check')
  // module.exports = {
  //     employee //employee:employee
  // }


  _exports.employee = employee;
});
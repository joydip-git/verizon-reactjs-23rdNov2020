const employeeModule = require('./employee')

class developer extends employeeModule.employee {
    incentivePayment;
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentivePayment = incentive;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this.incentivePayment;
    }
}
module.exports = {
    developer
}
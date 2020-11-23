const employeeModule = require('./employee')

class hr extends employeeModule.employee {
    gratuityPayment;
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra);
        this.gratuityPayment = gratuity;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this.gratuityPayment;
    }
}
module.exports = {
    hr
}
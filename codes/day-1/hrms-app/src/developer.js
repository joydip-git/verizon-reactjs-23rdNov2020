//const employeeModule = require('./employee')
import { employee } from './employee'

// class developer extends employeeModule.employee {
export class developer extends employee {
    //incentivePayment;
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentivePayment = incentive;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this.incentivePayment;
    }
}
// module.exports = {
//     developer
// }
export class employee {
    name;
    id;
    basicPayment;
    daPayment;
    hraPayment;
    constructor(name, id, basic, da, hra) {
        this.basicPayment = basic;
        this.daPayment = da;
        this.hraPayment = hra;
        this.name = name;
        this.id = id;
    }
    calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment;
    }
}
//const check = () => console.log('check')
// module.exports = {
//     employee //employee:employee
// }
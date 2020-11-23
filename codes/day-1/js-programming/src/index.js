class person {
    personName;
    personLoc;
    personProfession;

    constructor(name, loc, profession) {
        //console.log(this)
        this.personName = name;
        this.personLoc = loc;
        this.personProfession = profession;
    }
    print = () => {
        return `
        ${this.personName}, 
        ${this.personLoc}, 
        ${this.personProfession}
        `;
    }
}
//console.log(person.prototype) //Object.prototype

class trainer extends person {
    subjectToTeach;
    constructor(name, loc, profession, subject) {
        super(name, loc, profession)
        this.subjectToTeach = subject;
    }
    print = () => {
        return `${super.print()}, ${this.subjectToTeach}`
    }
}
//console.log(trainer.prototype) //person.prototype

const joydipTrainer = new trainer('joydip', 'bangalore', 'IT Consultant', 'React JS')
const sunilTrainer = new trainer('sunil', 'chennai', 'IT developer', 'Angular JS')
//person.prototype
//console.log(joydipTrainer.__proto__)
//console.log(joydipTrainer.print());
const printInfo = (printFuncRef) => {
    //always bound to window object/context
    console.log(printFuncRef())
}

// joydipTrainer.print = joydipTrainer.print.bind(joydipTrainer);
// sunilTrainer.print = sunilTrainer.print.bind(sunilTrainer);

printInfo(joydipTrainer.print)
printInfo(sunilTrainer.print)

// function add(x, y) {
//     return (x + y);
// }
let add = (x, y) => {
    return (x + y)
}
//add = add.bind(<context>)

// const subtract = (x, y) => {
//     if (x > y)
//         return (x - y);
//     else
//         return (y - x);
// };
//arrow function (=> arrow operator)
const subtract = (x, y) => x > y ? (x - y) : (y - x);

console.log(subtract(10, 20));
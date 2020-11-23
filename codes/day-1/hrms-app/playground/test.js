//import the utility members
const { add } = require('./utility');
const utilityModule = require('./utility')
console.log(utilityModule)

console.log(utilityModule.add(10, 20))
console.log(utilityModule.subtract(10, 5));

const anil = {
    name: 'anil',
    age: 20
}

// const name = anil.name;
// const age = anil.age;

const { name, age } = anil;

console.log(name, age)

// console.log(module)

// const copyOfAnil = {};
// for (let propName in anil) {
//     const propValue = anil[propName];
//     copyOfAnil[propName] = propValue;
// }
// console.log(anil)
// console.log(copyOfAnil)
// console.log(anil === copyOfAnil)

const copyOfAnil = { ...anil, id: 1 } //spread operator
console.log(copyOfAnil)
console.log(anil)
console.log(anil == copyOfAnil)

const numbers1 = [1, 2, 3, 4]
const numbers2 = [10, 20, 30, 40]

const numbers = [...numbers1, 100, 200, ...numbers2]
console.log(numbers)

const addition = (a, b, c) => a + b + c;
const subtraction = (a, b) => a - b;

//args-->rest parameter
//const invoke = (calcFuncRef, x, y, z=0)=>{
const invoke = (calcFuncRef, ...args) => {
    console.log('result: ' + calcFuncRef(args[0], args[1], args[2]));
}
invoke(addition, 10, 25, 30)//-->[10,20,30]
invoke(subtraction, 10, 5)//->[10,5]


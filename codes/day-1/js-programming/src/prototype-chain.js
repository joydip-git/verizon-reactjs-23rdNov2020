//every function that you write in JS is by default bound to an object (context)
//person function is by default bound to window object/context

function person(name, loc, profession) {
    console.log(this)
    this.name = name;
    this.loc = loc;
    this.profession = profession;
    this.print = function () {
        return `
        ${this.name}, 
        ${this.loc}, 
        ${this.profession}
        `;
    }
}
Object.prototype.show = function () { console.log('Show....') }
console.log(Object.prototype)
//console.log(person.prototype)
//person.prototype.show = function () { console.log('Show....') }
console.log(person.prototype)

const joydipObj = new person('joydip', 'bangalore', 'IT Consultant')
console.log(joydipObj.__proto__)
joydipObj.sayHi = function () { console.log('Hi...') }

console.log(joydipObj.print());
joydipObj.sayHi();

console.log(joydipObj.hasOwnProperty('show'))
console.log(person.prototype.hasOwnProperty('show'))
console.log(Object.prototype.hasOwnProperty('show'))
joydipObj.show();
//joydipObj is NOT linked to Object's object
// const joydipObj = new person('joydip', 'bangalore', 'IT Consultant');
// console.log(window)

// function add(x, y) {
//     //window
//     var z = x + y
//     console.log(window.z)
// }




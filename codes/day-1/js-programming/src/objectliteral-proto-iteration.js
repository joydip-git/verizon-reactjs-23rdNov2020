const joydip = {
    //value properties
    name: 'joydip',
    profession: 'IT Consultant',
    location: 'Bangalore',
    //functional properties
    print: function () {
        return this.name + ', ' + this.profession + ', ' + this.location;
    }
}

Object.prototype.sayBye = function(){console.log('Bye')}

const info = joydip.print()
console.log(info)

for (let propName in joydip) {
    const propValue = joydip[propName]
    console.log(propName + ':' + propValue)
}

function updateObject(objectRef, propName, propValue) {
    objectRef[propName] = propValue;
}
updateObject(joydip, 'location', 'hyderabad');
console.log(joydip.print())

console.log(joydip.__proto__)
console.log(joydip.hasOwnProperty('location'));

//Object

joydip.sayBye();



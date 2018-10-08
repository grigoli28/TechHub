// Design Patterns
// Constructor design pattern
// Constructor.prototype
// __proto__ -> Parent
// prototype -> Cloned Value
// Object.create(Object.prototype);
// Object.defineProperty
// Object.defineProperties

let animal = {
    eats: true
}

function Dog(name) {
    this.name = name;
}

Dog.prototype = animal;

let jeka = new Dog('White Jeka');
// console.log(jeka.eats);
// jeka.eats = "Yep"
// console.log(jeka.eats);


// console.log(Dog.prototype.constructor === Dog); // gives false because we added prototype animal and constructor has changed !important
// console.log(jeka.constructor === Dog); // !important


// let obj = {};
// console.log(obj.toString === obj.__proto__.toString);




/* !IMPORTANT 
// creating object
let newObject = {} // 1
let newObject1 = Object.create(Object.prototype); // 2 
let newObject2 = new Object(); // 3


newObject.someKey = 'Hello'; // 1
// console.log(newObject.someKey);

newObject1['someKey'] = 'Hello'; // 2
// console.log(newObject1['someKey']);

Object.defineProperty(newObject2, 'someKey', { // 3
    value: 'Hello',
    writable: true,
    configurable: true,
    enumerable: true
});
// console.log(newObject1.someKey);





function defineProp(obj, key, value, writable = true, configurable = true, enumerable = true) {
    let config = {
        value,
        writable,
        configurable,
        enumerable
    }

    Object.defineProperty(obj, key, config); // obj parameter is passed by reference !important
}

let person = Object.create(Object.prototype);

defineProp(person, 'car', 'supercar');
defineProp(person, 'dateOfBirth', '1998');
defineProp(person, 'hasBeard', true);

// console.log(person);


Object.defineProperties(person, {
    'key': {
        value: 'Key value',
        writable: true,
        configurable: true,
        enumerable: true
    },
    'key2': {
        value: 'Key2 value',
        writable: true,
        configurable: true,
        enumerable: true
    }
})


// console.log(person);

let driver = Object.create(person);

defineProp(driver, 'topSpeed', '170mph');

console.log(driver.dateOfBirth);


function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return `${this.model} has done ${this.miles}`;
    }
}


let civic = new Car('Honda Civic', 2017, 2433);
let prius = new Car('Toyota Prius', 2017, 64);

console.log(driver.toString());
console.log(civic.toString());
console.log(prius.toString());
*/







/*  */
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return `${this.model} has done ${this.miles}`;
}

let civic = new Car('Honda Civic', 2017, 2433);
let prius = new Car('Toyota Prius', 2017, 64);

console.log(civic.toString());
console.log(prius.toString());
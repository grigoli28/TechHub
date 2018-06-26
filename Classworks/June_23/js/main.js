// callback functions
// new Object declaration
// adding/removing object properties
// object.property / object["property"]
// writable, enumerable, configureble
// Object.defineProperty()
// Object.defineProperties()
// Object.assign()
// function.call()
// function.apply()
// Symbol()
// Constructor function
// string.charAt()
// string.toUpperCase()
// string.toLowerCase()
// string.indexOf()
// string.lastIndexOf()


"use strict";
/*  
// let user = new Object();
// let user_2 = {};

// JSON {}
*/

/*  
{}
{               {
    name,           name,
    age             age
}               }
*/






/*  
let user = {
    name: "John",
    age: 33,
}

let user_2 = {};
user_2.name = "User 2";
user_2.age = 30;


user.isAdmin = true;
console.log(user.name, user['age'], user.isAdmin);
console.log(user);

delete user.age;
console.log(user.name, user['age'], user.isAdmin);
console.log(user);

let key = prompt("Enter key", 'name');
alert(user[key]);
*/







/*
    value
    writable : true
    enumerable : true
    configureble : true
*/


/*  
let user = {
    name: "John",
    age: 33,
}

user.isAdmin = true;

let user_2 = {};

Object.defineProperty(user, "lastname", {
    value: 'Doe',
    writable: false,
    configurable: false,
    enumerable: false
})

Object.defineProperties(user_2, {
    name: { value: "Test", writable: false },
    lastname: { value: "Lastname", writable: false },
})

console.log(user.lastname);
user.lastname = "Smith";
console.log(user.lastname);
delete user.lastname;
console.log(user.lastname);
*/






/*  
let speed = 300;
let color = "black";
let year = 2018;

let car = {
    color,
    year,
    engine: 6.3
}

console.log('age' in car);
console.log('engine' in car);

Object.defineProperty(car, "speed", {
    value: speed,
    enumerable: false
})

console.log(car);

for (let key in car) {
    console.log(`key: ${key}, value: ${car[key]}`);
}
*/







/*  
let car = {
    speed: 300,
    color: "black",
    year: 2018,
    engine: 6.3,
}

let car_2 = car;
console.log(car_2 == car);

const myConst = {
    name: "const"
}

myConst.new = "new";
console.log(myConst.new);

// next code gives error
// myConst = {
//     name: 'const',
//     new: 'new'
// }

let clone = Object.assign({}, car);
console.log(car, '\n', clone);
*/







/*  
let user = {
    name: "John",
    age: 33,
}

let car = {
    speed: 300,
    color: "black",
    year: 2018,
    engine: 6.3,
    beep() {
        alert("PI PI PI");
    }
}

user.sayHi = function() {
    alert("Hello");
}

// user.sayHi();
// user['sayHi']();
// car.beep();
*/






/*  
function blaBla() {
    alert(this);
}
// blaBla(); // gives error when in strict mode


let userV2 = {
    name: "Javascript",
    sayHi() {
        let func = () => alert(this.name);
        func()
    },
    test: () => { // arrow functions doesn't have own this.
        alert(this.name)
    }
}

userV2.sayHi();
userV2.test();
*/








/*  
function greet() {
    alert(this.name);
}

function say(time, phrase) {
    alert(`[${time}] ${this.name}: ${phrase}`);
}

// CALL & APPLY methods

let client = { name: 'client' }
let admin = { name: 'admin' }
let john = { name: 'John' }

// greet.call(client); // this = client
// greet.call(admin); // this = admin
// say.call(john, "10:00", "Hello"); // this = john

let message = ["11:00", "Hi"];
say.apply(john, message);
*/






/*  
let id = Symbol('id');
let id1 = Symbol('id');
console.log(id == id1)

let john = { name: 'John' }

john[id] = "ID value";

console.log(john[id])

console.log(john)

for (let key in john) {
    console.log(key)
}


let customer = {
    name: 'Super',
    [id]: 140,
}
*/






/*  Constructor
function User(name) {
    // this => {}
    this.name = name;
    this.isAdmin = false;
    this.hello = function() {
        alert(`My name is: ${this.name}`);
    }
}

let conUser = new User("new User");

console.log(conUser);
conUser.hello();
*/










/*  
let num = 5;
let single = 'single';
let double = "double";
let backticks = `backticks`;

console.log('my ' + num + single);
console.log("my " + num + double);
console.log(`my ${num} ${backticks}`);

console.log('\u00A9');
console.log('\u{20331}');
console.log(`I \u{1F60D} JS`);


let str = "Hello from GEORGIA.";


console.log("String".length);
console.log(str.charAt(3));
console.log(str[0]);
console.log("------");

for (let char of str) {
    console.log(char);
}

console.log("uppercase".toUpperCase());
console.log("LOWERCASE".toLowerCase());
console.log(str.lastIndexOf('.'));


let str = "Hello from the other side.";
let target = 'the';
let pos = 0;

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}
*/
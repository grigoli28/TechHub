// FIRST CLASS functions
// local scope, block scope => lexical scope | Environment
// Inner & Outer Environments
// Inner environment has reference (წვდომა) to outer
// any function when created has its own [[Entivronment]] property
// Immediately Invoked Function Expression
// __proto__
// prototype -> Object()
// arguments.callee

/*  
{
    // block scope
}

function a() {
    // local scope
}

*/




let text = 'my text';

// outer Environment
function tell(name) {
    // inner Environment has reference (წვდომა) to outer one;
    // console.log(`${text}, ${name}`);
}



tell('Gella');


function saySomething(firstName, lastName) {

    // private function !important
    return function getFullName() {
        return `${firstName} ${lastName}`;
    }

    // console.log(`Hello ${getFullName()}`);
    // console.log(`Bye ${getFullName()}`);
}

// let cached = saySomething('John', 'Doe');
// console.log(cached());
// saySomething('John', 'Doe');



function counter() {
    let count = 0;

    return function() {
        return (count += 1);
    }
}

// any function when created has its own [[Entivronment]] property !important
// let myCounter = counter();
// let myCounter2 = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log('---');
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());
// console.log(myCounter2());

// {
//     let message = 'Hello from block scope';
//     console.log(message);
// }
// console.log(message); // gives error


// IIFE !important

// (function(){
//     let message = 'Hello from local scope';
//     console.log(message);
// })();











/* Object.prototype 
// prototype -> Object()

let myfunc = function() {}
    // console.log(myfunc.prototype);

Array.prototype.myVar = 'MyVar';
let newArr = new Array();

// each object has hidden variable __proto__

newArr.myVar = 'other';
// console.log(Array.prototype.myVar);
// console.log(newArr.myVar);

newArr.__proto__.myVar = 'other';
// console.log(Array.prototype.myVar);
// console.log(newArr.myVar);



// inheritance in objects, inherited properties !important
let animal = {
    eats: true,
    walk() {
        console.log('Animal walk!...');
    }
}

let dog = {
    barks: true
}

let lekvi = {
    age: 1,
    __proto__: dog
}

console.log(dog)
dog.__proto__ = animal;

console.log(dog.eats);
console.log(dog.barks);
dog.walk();
console.log('--------')
console.log(lekvi.eats);
console.log(lekvi.barks);
lekvi.walk();
*/




let refFunc  = function refFunc() {
    console.log(arguments.callee);
}


refFunc();
// Default parameter initialisation
/*
function defaultParams(x = 1, y = 1) {
    return x * y;
}

console.log(defaultParams(5, 3));
console.log(defaultParams(5));
console.log(defaultParams());
 */

// Arrays
/*  
let years = new Array(10);
let years2 = [10,];

console.log(years.length);
years.length = 5;
console.log(years.length);

console.log('-------------');
console.log(years2.length);
years2.length = 17;
console.log(years2.length);


let fruits = ["Apple", "Banana", "Cherry",];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[2] = "Pineapple";
console.log(fruits);


let arr = ['Apple', { name: 'John' }, true, () => { alert("Hello from array") }, ];
console.log(arr);
console.log(arr[0]);
console.log(arr[1].name);
console.log(arr[2]);
arr[3]();




let numbers = [];
// LIFO
// push/pop
numbers.push(1);
numbers.push(3);
numbers.push(8);
numbers.push(13);
console.log(numbers);
let removed = numbers.pop();

console.log(`removed ${removed}`);
console.log(numbers);
numbers.length = 0;
console.log(numbers);


// FIFO
// shift/unshift

numbers.unshift(1);
numbers.unshift(3);
numbers.unshift(8);
numbers.unshift(13);
console.log(numbers);

removed = numbers.shift();
console.log(`removed ${removed}`);
console.log(numbers);



let numbers = [];
numbers.push(1);
numbers.push(3);
numbers.push(8);
numbers.push(13);


// Pass-by-reference
let n = numbers;
// console.log(n === numbers);
n.push(33);
console.log(numbers);

// Pass-by-value
let clone = numbers.slice();
clone.push(64);
console.log(numbers);
console.log(clone);


// Object.freeze(clone); // Denies changes to object properties
clone.age = 11;
numbers.age = 13;
console.log(clone);
console.log(clone['age']);
console.log('-----------');



for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}
console.log('----------');

for (value of numbers) {
    console.log(value);
}
console.log('----------');

for (key in numbers) {
    console.log(numbers[key]);
}
console.log('----------');


// console.log(numbers.toString());
// console.log(numbers.join('-'));
// console.log(numbers);


let matrix = [
    [1, 2, 3, ],
    [4, 5, 6, ],
    [7, 8, 9, ],
];

console.log(matrix[0][1]);
*/

/*  */
// DOM
// DOM Tree
// console.log(document);
// console.log(document.documentElement);

// console.log(document.body);
// console.log(document.head);

// childNodes, firstChild, lastChild
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

for (let i = 0; i < document.body.childNodes.length; i += 1) {


    if (document.body.childNodes[i].nodeName.toLocaleLowerCase() == "div") {
    document.body.childNodes[i].textContent = "გამარჯობა";
    // document.body.childNodes[i].textContent = "<b>გამარჯობა</b>";
    // document.body.childNodes[i].innerHTML = "<b>გამარჯობა</b>";
    // document.body.childNodes[i].innerText = "<b>გამარჯობა</b>";
  }
  // console.log(document.body.childNodes[i].nodeName);
}
// document.body.childNodes[1] = 'Gamarjoba'; // not allowed to change value
// console.log(document.body.parentNode === document.documentElement);
// console.log(document.head.nextSibling);
// console.log(document.head.nextElementSibling);
// console.log(document.body.previousElementSibling);

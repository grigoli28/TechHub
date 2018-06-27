'use strict';
// Array.forEach()
// Array.toString()
// Array.filter()
// Array.entries()
// Array.values()
// Array.keys()
// Object.keys();
// Object.entries();
// Math.max();
// ...rest // line 67 & 74 //rest and spread parameters/operators
// insertBefore(elementNode, element)






/* Array 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];

// forEach() CAN NOT be stopped with break!!!
// arr.forEach((element, index, arr) => {
//     console.log(`Value: ${element}; Index: ${index}; Array: [${arr}]`);
// });


let newArr = arr.map((element, index, arr) => {
    return `<div><b>${element * 2}</b></div>`;
});


// !important
document.body.innerHTML = newArr.toString().split(',').join(' ');
console.log(newArr);

let filtered = arr.filter((element) => {
    return element & 1;
});

console.log(filtered);
console.log('\n');

for (let entry of arr.entries()) {
    console.log(entry);
}
console.log('\n');
for (let value of arr.values()) {
    console.log(value);
}
console.log('\n');
for (let key of arr.keys()) {
    console.log(key);
}
*/







/*  
function allSum(x, y, ...numbers) {
    console.log(numbers);
    // console.log(arguments);
}

// allSum(1, 2, 3, 4, 5, 6);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];

console.log(Math.max(...[1, 2, 3, 4, 5, 6]));

let merge = [100, 113, ...[1, 2, 3, 4, 5, 6], ...arr];
let str = "Georgia";
console.log(...str);
console.log([...str]);
*/








/* DOM */
let elementNode = document.createElement('strong');
let elementText = document.createTextNode('Georgia');

let containerDiv = document.querySelector('#container');
let p = containerDiv.querySelector('#para'); // !important
// let p = document.querySelector('#para');

p.appendChild(elementNode);
elementNode.appendChild(elementText);

console.log(document.body.innerHTML);
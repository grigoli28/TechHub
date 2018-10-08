// Regular Expression
// regexp.test()
// regexp.exec()



/* let regEx = new RegExp('abcd'); // new RegExp(pattern, flags);
let regEx2 = /abcd/; // /pattern/flags


let sourceStr = 'Hello RegExp Hello Hello Hello';
let helloRegEx = /Hello/g;

let result = helloRegEx.test(sourceStr);
// console.log(result);

let result2 = helloRegEx.exec(sourceStr); // with g flag doesn't return correct index
// console.log(result2);

let chSet = /[ts]ell/i;
let str = 'Tell';
// console.log(chSet.test(str));


console.log(/[a-c]/i.test('ABCD')); */




// let regexp = /^\d{10}$/;
let year = /^\d{2}-\d{2}-(\d{4}|\d{2})$/;
let year2 = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
console.log(year.test('12-10-1998'));
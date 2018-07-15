// CLOSURE
// setTimeout, clearTimeout
// setInterval, clearInterval

// document.addEventListener('DOMContentLoaded', (event) => {
//     let h1 = document.getElementsByTagName('h1')[0];
//     h1.innerHTML = 'Hello from JS';
//     h1.style.color = 'red';
//     h1.style.padding = '10px';
//     h1.style.backgroundColor = '#eee';
//     h1.style.textAlign = 'center';
//     h1.addEventListener('click', (event) => {
//         setTimeout(greet, 3000);
//     });
// })


// function greet() {
//     alert('SetTimeout');
// }


// setTimeout(greet, 2000)
// clearTimeout();
// setInterval(() => alert("interval"), 2000);
// let intervalID = setInterval(() => {
//     alert('setinterval');
// }, 1000);


// setTimeout(() => {
//    clearInterval(intervalID); 
//    alert('Cleared')
// }, 5000);


// setTimeout(() => { alert('World'); }, 0);

// alert('Hello');




// let i = 0;
// let start = Date.now();

// function count() {
//     for (let j = 0; j < 2e9; j++) {
//         i++;
//     }
//     alert(`Done ${Date.now() - start} ms`);
// }

// count();


// function count2() {
//     do {
//         i++;
//     }
//     while (i % 1e6 != 0);
//     if (i == 2e9) {
//         alert(`Done ${Date.now() - start} ms`);
//     } else {
//         setTimeout(count2, 0);
//     }
// }


// count2();





/* CLOSURE



function add(first, second) {
    return first + second;
}

function sub(first, second) {
    return first - second;
}

function mul(first, second) {
    return first * second;
}

function identityf(x) { // !imporant
    return function () {
        return x;
    }
}

function addf(first) {
    return function (second) {
        return first + second;
    }
}

function liftf(binary) {
    return function (first) {
        return function (second) {
            return binary(first, second);
        }
    }
}

function curry(binary, first) {
    return liftf(binary)(first);
}

let myX = identityf(8); // !imporant
// let addF = addf(8);
let addF = addf(8)(5);
// console.log(myX());
// console.log(addF);


// let myLift = liftf(mul);
// console.log(myLift(5)(4));

let onePlus = curry(add, 1);
console.log(onePlus(50));

*/
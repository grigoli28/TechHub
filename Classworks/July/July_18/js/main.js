// Symbol.iterator
// Generator Functions



/*  
var x = 'outer scope';

(function() {
    console.log(x);
    var x = 'inner scope'
})();

if (1) {
    console.log(x); // TDZ (Temporary Dead Zone) !important
    var x = 'inner scope';
}
*/


// Generator/Generator Functions
// Iterable protocol
// Iterator protocol



// let myObject = {
//     [Symbol.iterator]: () => ({
//         items: 'Hello Iterator'.split(''),
//         next: function next() {
//             return {
//                 done: this.items.length === 0,
//                 value: this.items.shift()
//             }
//         }
//     })
// };


let myObject = {
    prop1: 'Hello',
    prop2: 'World',
    prop3: '!...',
    [Symbol.iterator]: function*() {
        for (value of Object.keys(this)) {
            yield value;
        }
    }
};



function* display() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 8
}

let Display = display();
// for (let number of Display) {
//     console.log(number);
// }


// for (let letter of myObject) {
//     console.log(letter);
// }





function* mul(value) {
    yield value * 1
    yield value * 2
    yield value * 3
    yield value * 4
    yield value * 5
    yield value * 6
    yield value * 7
    yield value * 8
    yield value * 9
}

let table8 = mul(8);

// for (let n of table8) {
//     console.log(n);
// }

console.log(...mul(8));
console.log(...mul(7));
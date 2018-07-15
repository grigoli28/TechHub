// Array.splice()
// Array.sort()
// Array.find()
// Array.filter()
// Array.map()
// console.table()
// generator functions
// Symbol.iterator
// .next()
// Set.add()
// Set.has()
// Set.delete()
// Set.clear()
// Set.size()
// Map.set()
// Map.get()
// Object.entries()






/*  
let arr = ["I", "<3", "Javascript"];
// let removed = arr.splice(1, 1);
let removed = arr.slice(1, 2);
console.log(arr, removed);

let nums = [2, 3, 9, 5, 7, 13, 24, 1];


function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(nums.sort((a, b) => { return a - b; }));
*/







/*  
let users = [
    { id: 1, name: "Gela" },
    { id: 2, name: "John" },
    { id: 3, name: "Jimsheri" },
    { id: 4, name: "Ani" },
    { id: 5, name: "Koba" },
]

let foundUser = users.find(user => user.id == 2);
console.log(foundUser);
let filtered = users.filter(user => user.id < 4);
console.log(filtered);


let nums = [2, 3, 9, 5, 7, 13, 24, 1];
let doubled = nums.map((number, index, arr) => {
    return number * 2;
})
console.table(doubled);


// !important
let html = users.map(user => {
    return `
        <div class="user">
            <h2 class="title"> ${user.name} <small>Id - ${user.id}</small></h2>
        </div>
    `;
})

console.table(html);
document.body.innerHTML = html.join("");
*/










// Array.from(), ...var, for value of items // eseni arian iteraciuli metodebi // !important
/* Generator functions 

// { generator inner structure
//     value,
//     done: false|true
// }
function* generator() {
    yield 'H'
    console.log("H")
    yield 'e'
    console.log("e")
    yield 'l'
    console.log("l")
    yield 'l'
    console.log("l")
    yield 'o'
    console.log("o")
}

let g = generator();
// console.log(typeof g[Symbol.iterator] === 'function');

// console.log(typeof g.next() === 'function');
// console.log(g[Symbol.iterator]() === g);
// // console.log([...g]);
// console.log(Array.from(g));


// for (let char of g) {
//     // console.log(char); // this loop can work even if empty
// }

// !important
let rangeCount = {
    start: 1,
    end: 13,
}

rangeCount[Symbol.iterator] = function() {
    return {
        current: this.start,
        last: this.end,
        next() {
            if (this.current < this.last) {
                return {
                    done: false,
                    value: this.current++
                }
            } else {
                return { done: true }
            }
        }
    }
}

for (let num of rangeCount) {
    console.log(num);
}

// {
//     value,
//     done: false|true // iterations goes until done becomes true
// }
*/










/* SET
// keys, values, entries // !important
// keys and values are the same in set

let set = new Set();
set.add(5)
    .add(1)
    .add(8)
    .add(1);
let nums = [2, 3, 9, 5, 7, 13, 24, 1];
// console.log(set);
// console.log(set.keys());

// for (let key of set.keys()) {
//     // console.log(key);
// }

// for (let value of set.values()) {
//     // console.log(value);
// }

for (let [key, value] of set.entries()) { // this is destructuring (using array) !important
    console.log(key, value);
}

let newSet = new Set(nums); // making set using array
*/




/* DATE 
// Date
// new Date()
// new Date(milliseconds)
// new Date(datestring)
// new Date(year, month, date, hours, minutes, seconds, ms)


// let now = new Date();
// console.log(now.toString());

// let start = new Date(0);
// console.log(start.toString());

// let fromString = new Date('2018-06-30');
// console.log(fromString.toString());

// let fromConst = new Date(2018, 5, 30, 14, 32, 48, 50);
// console.log(fromConst.toString());

// console.log(fromConst.getFullYear());
// console.log(fromConst.getMonth());
// console.log(fromConst.getDate());
// console.log(fromConst.getHours());
// console.log(fromConst.getDay());

let old = Date.now();
let i = 0;
while (i < 1000000000) {
    i++;
}

let current = Date.now();
console.log(`elapsed time ${current - old} ms`);
*/









/* MAP */
let myMap = new Map();

myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(false, 0);
myMap.set(true, 1);
myMap.set({ name: 'John' }, 'user');

// console.table(myMap);

for (let [key, value] of myMap.entries()) {
    // console.log(key, value);

}

let prices = new Map([
    ['banana', 5],
    ['apple', 4],
    ['kiwi', 4],
])

console.log(prices);

let fromObj = new Map(Object.entries({
    name: 'John',
    age: 40,
    stressed: true
}));
console.log(fromObj);
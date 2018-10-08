// Iterators, Generator Functions


// let ids = [9000, 9001, 9002];

// let iteratorF = ids[Symbol.iterator]();

// console.log(iteratorF.next());
// console.log(iteratorF.next());
// console.log(iteratorF.next());
// console.log(iteratorF.next());












/*  */
// let ids = {
//     startId: 113,
//     endId: 500,
//     [Symbol.iterator]() {
//         let self = this;
//         return {
//             next() {
//                 let value = self.startId > self.endId ? undefined : self.startId++;
//                 let done = !value;
//                 return { value, done };
//             }
//         }
//     }
// }



// let myIds = ids[Symbol.iterator]();

// ids.startId = 1;
// ids.endId = 15;

// for (let id of ids) {
//     console.log(id);
// }









/*  */
function* processIds() {
    // yield 8000;
    // yield 8001;
    let startId = 1;
    while (true) {
        yield startId++;
    }
}

let processIt = processIds();

// console.log(processIt.next());
// console.log(processIt.next());
// console.log(processIt.next());

for (let id of processIt) {
    if (id > 10 ) break;
    console.log(id)
}
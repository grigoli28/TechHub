function to(generator, limit) {
    let current = 1;
    return function() {
        if (current <= limit) {
            current += 1;
            return generator();
        }
        return undefined;
    }
}


function myRand() {
    return Math.round(Math.random() * 100) + 1;
}

let steps = to(myRand, 3);
console.log(steps());
console.log(steps());
console.log(steps());
console.log(steps());
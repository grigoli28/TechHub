const Mathfun = require('./js/mathfun');

let processResults = (err, result, time) => {
    if (err) {
        console.log(`Error : ${err.message}`);
    }
    else {
        console.log(`Result is : ${result}, ${time}ms`);
    }
}

for (let i = 0; i < 10; i++) {
    console.log('Calling EvenDoubler', i);
    Mathfun.evenDoubler(i, processResults);
}
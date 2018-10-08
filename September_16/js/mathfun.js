const maxTime = 1000;

let evenDoubler = (v, callback) => {
    let waitTime = Math.floor(Math.random() * maxTime + 1);
    if (v % 2) {
        setTimeout(() => {
            callback(new Error('Odd Number'));
        }, waitTime);
    }       
    else {
        setTimeout(() => {
            callback(null, v * 2, waitTime);
        }, waitTime);
    }
}

module.exports.evenDoubler = evenDoubler;

// Callback arguments for module : error, data, 
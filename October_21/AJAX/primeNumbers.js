const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'prime.html'));
});


app.get('/add', (req, res) => {
    if (!req.query.min || !req.query.max) {
        res.sendStatus(400);
    }
    let min = Number(req.query.min);
    let max = Number(req.query.max);
    let result = countPrimes(min, max);

    setTimeout(() => {
        res.send(result.toString());
    }, 2000);
});


app.listen(PORT, () => {
    console.log(`Server on - ${PORT}`);
});


function countPrimes(min, max) {
    let count = 0;
    for (let i = min; i < max; i++) {
        if (isPrime(i))
            count++;
    }
    return count;
}


function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};
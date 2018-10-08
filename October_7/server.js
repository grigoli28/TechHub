/* 
    Modules: express, path
    Express Middleware functions
*/



const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

let id = 0;
let products = [
    { name: 'Apple', id: id++, price: 4000 },
    { name: 'Samsung', id: id++, price: 3500 }
];



// Middleware !important
let myMid = function(req, res, next) {
    console.log(`${req.ip}, ${req.hostname} Middleware Function`);
    next();
}

let timeLog = function(req, res, next) {
    let time = new Date();

    req.requestTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    next();
};

app.use(express.static(path.join(__dirname, '/public')));
app.use(myMid);
app.use(timeLog);


app.get('/', (req, res) => {
    console.log(`Index.html - ${req.requestTime}`);
    // res.send({ text: 'Hello Text' });

    // res.sendfile(path.join(__dirname, '/public', 'index.html'));
    // res.sendFile('index.html', { root: path.join(__dirname, '/public') });

    res.sendFile('index.html');
});


app.get('/calc', (req, res) => {
    let num_1 = parseFloat(req.query.num_1);
    let num_2 = parseFloat(req.query.num_2);

    let operator = req.query.operation;

    switch (operator) {
        case '+':
            res.send(`${num_1 + num_2}`);
            break;
        case '-':
            res.send(`${num_1 - num_2}`);
            break;
        case '*':
            res.send(`${num_1 * num_2}`);
            break;
        case '/':
            res.send(`${num_1 / num_2}`);
            break;
    }

    res.sendfile('calc.html', { root: path.join(__dirname, 'public') });
})


app.get('/admin', (req, res) => {
    res.redirect('https://google.com');
});


app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    let product = products.find(p => p.id == id);
    if (!product) {
        // return res.status(404).send('No Product');  
        return res.sendStatus(404);
    } else {
        res.json(product);
    }
});

app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`);
});
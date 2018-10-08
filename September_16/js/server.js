/* 
    Express module
*/



// const http = require('http');

/* http.createServer((req, res) => {
    res.write('Hello NodeJS Server');
    res.end();
}).listen(8000); */

/* http.createServer((req, res) => {
    let date = new Date();
    res.write(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    res.end();
}).listen(9000); */








const express = require('express');
const path = require('path');
const debug = require('debug')('app'); // with <set DEBUG=app> and <DEBUG=app node jsFileName> in cmd
const chalk = require('chalk');
const morgan = require('morgan');

let app = express();
let port = 3000;


app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(morgan('combined'));

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));


app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendFile(path.join(__dirname, '/views/', '/index.html/'));
});

app.get('/products', (req, res) => {
    // res.send('Hello Express');
    res.sendFile(path.join(__dirname, '../src/views/', '/products.html/'));
});

app.get('/products', (req, res) => {
    res.send('Hello Products');
});

app.listen(port, (err) => {
    // console.log(`Listening on port - ${port}`);
    debug(`Listening on port - ${chalk.green(port)}`);
});
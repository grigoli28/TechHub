/* 
    Modules: http, express
    http.createServer(cbFunc);
    http.createServer(cbFunc).listen(<port>);



*/


/* 
    user/7/profile      instead =>        GET         user/7
    user/7/update                         PUT||PATCH  user/7
    user/7/delete                         DELETE      user/7
*/




const http = require('http');
const express = require('express');
const app = express();


/* 
http.createServer((request, response) => {
    response.write('Hello World! Node JS');
    response.end();
}).listen(3000);
 */


app.get('/', (req, res) => {
    res.send('Express Hello World! Nodemon Reloaded');
});


app.get('/products/:productId', (req, res) => {
    res.send(`Products GET Method, productId : ${req.params.productId}`);
});


app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(`UserId - ${req.params.userId}, BookId - ${req.params.bookId}`);
});


app.post('/products', (req, res) => {
    const name = req.param('name');
    res.send(`Posted Name : ${name}`);
});

app.put('/products', (req, res) => {
    res.send('Products PUT Method ...');
});

app.delete('/products', (req, res) => {
    res.send('Products DELETE Method ...');
});


app.listen(3000);

console.log(express);
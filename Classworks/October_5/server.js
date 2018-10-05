/* 
    Route parameters
    Query string
    CRUD
    CREATE/READ/UPDATE/DELETE
*/



const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello');
});


app.get('/users/:userId(\\d)', (req, res) => {
    const userId = req.params.userId;
    res.send(`User id : ${userId}`);
});

app.get('/products', (req, res) => {
    res.send(`
    <h1>Welcome</h1>
    <h2>${req.query.name} ${req.query.lastname}</h2>
    `);
});

app.listen(3000);
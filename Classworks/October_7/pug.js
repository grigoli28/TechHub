const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;


app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Page Title',
        message: "Welcome message",
        // numbers: [1,2,3,4,5,6]
    });
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.listen(PORT, () => {
    console.log(`Running on Port - ${PORT}`);
});
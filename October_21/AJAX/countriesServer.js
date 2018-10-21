const express = require('express');
const path = require('path');
const countries = require('./countriesDB');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'countries.html'));
});


app.get('/countries/:prefix', (req, res) => {
    if (!req.params.prefix) {
        return res.sendStatus(400);
    }
    let prefix = req.params.prefix.toUpperCase();
    let result = countries
        .filter(c => c.name.toUpperCase().startsWith(prefix))
        .map(c => c.name);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server on - ${PORT}`);
});
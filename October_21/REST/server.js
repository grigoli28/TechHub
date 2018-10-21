const express = require('express');
const path = require('path');

const app = express();

const MoviesController = require('./routes/MoviesController');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', MoviesController);

app.listen(3000);
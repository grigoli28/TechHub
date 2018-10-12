const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 3000;


app.use(cookieParser('encode'));
app.use(express.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    const color = req.signedCookies.userColor || '#fff';
    res.render('index', { color });
});


app.post('/', (req, res) => {
    res.cookie('userColor', `${req.body.userColor}`, { signed: true });
    res.render('index', { color: req.body.userColor });
});


app.listen(PORT, () => {
    console.log(`Server started on - ${PORT}`);
})
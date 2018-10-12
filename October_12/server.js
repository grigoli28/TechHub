/* 
    Cookies
    cookie-parser
    app.use(cookieParser())
    res.cookie()
    Signed cookies
*/


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 3000;


app.use(cookieParser('cipher'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.cookie('username', 'Grigoli');
    res.cookie('cart', { items: [1, 2, 3] });
    // res.cookie('forever', 'Forever value', {expire: Date.now() + 6000});
    res.cookie('forever', 'Forever value', { maxAge: 10000 });

    res.cookie('signed', 'random text', { signed: true });

    res.send('<h1>Home Page</h1>');
});


app.get('/cookies', (req, res) => {
    res.write(`<h1>Username  - ${req.cookies.username} </h1>`);
    res.write(`<h1>Forever - ${req.cookies.forever} </h1>`);
    res.write(`<h1>Cart - ${req.cookies.cart.items.join(' ')} </h1>`);
    res.write(`<h1>Signed - ${req.signedCookies['signed']} </h1>`);
    
    res.end();
});


app.get('/clear', (req, res) => {
    // res.clearCookie('cart');
    // res.clearCookie('username');
    res.send('Cookies have been removed!');
});


app.listen(PORT, () => {
    console.log(`Server started on - ${PORT}`);
})
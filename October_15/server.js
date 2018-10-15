/* 
    Session
    express-session
    app.use(session({ secret: '', name: '', resave: true, saveUninitialized: true }));
    req.session
*/


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 3000;


app.use(cookieParser());
app.use(session({
    secret: 'super cat',
    name: 'demo-session',
    resave: true,
    saveUninitialized: false
}));


app.get('/', (req, res) => {
    if (req.session.viewCount) {
        req.session.viewCount++;
        res.send(`You Visited this page ${req.session.viewCount} times`);
    } else {
        req.session.viewCount = 1;
        res.send("HELLO");
    }
});




app.listen(PORT, () => {
    console.log(`Server started on - ${PORT}`);
});
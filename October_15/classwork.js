const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 3000;


const PAGES = {
    root: {
        url: '/',
        viewCount: 0
    },
    contact: {
        url: '/contact',
        viewCount: 0
    },
    about: {
        url: '/about',
        viewCount: 0
    }
};


app.use(cookieParser());
app.use(session({
    secret: 'super cat',
    name: 'demo-site',
    resave: true,
    saveUninitialized: false
}));


app.get(PAGES.root.url, (req, res) => {
    if (req.session.root) {
        req.session.root.viewCount++;
        res.send(`You Visited this page ${req.session.root.viewCount} times`);
    } else {
        req.session.root = PAGES.root;
        res.send("First Time Visit");
    }
});


app.get(PAGES.contact.url, (req, res) => {
    if (req.session.contact) {
        req.session.contact.viewCount++;
        res.send(`You Visited this page ${req.session.contact.viewCount} times`);
    } else {
        req.session.contact = PAGES.contact;
        res.send("First Time Visit");
    }
});


app.get(PAGES.about.url, (req, res) => {
    if (req.session.about) {
        req.session.about.viewCount++;
        res.send(`You Visited this page ${req.session.about.viewCount} times`);
    } else {
        req.session.about = PAGES.about;
        res.send("First Time Visit");
    }
});


app.get('/destroy', (req, res) => {
    req.session.destroy(() => {
        res.send("Session Destroyed");
    });
});


app.listen(PORT, () => {
    console.log(`Server started on - ${PORT}`);
});
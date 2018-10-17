/* 
    Multer
    Memory Cache
        put (key, value, time, timeoutCallback)
        get (key)
*/


const express = require('express');
const path = require('path');
const multer = require('multer');
const mCache = require('memory-cache');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


mCache.put('super-cache', 'wow', 300, (key, value) => {
    console.log(`Key - ${key}, value - ${value}.`);
});

console.log(`Super cache - ${mCache.get('super-cache')}`);

setTimeout(() => {
    console.log(`Super cache - ${mCache.get('super-cache')}`);
}, 500);

const multerConfig = multer({
    dest: 'public/uploads',
});

app.set('views', './public/views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});



const cachePage = (duration) => {
    return (req, res, next) => {
        let key = `__cached__${req.originalUrl || req.url}`;
        let pageBody = mCache.get(key);

        if (pageBody) {
            res.send(pageBody);
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                mCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            }
            next();
        }

    }
};

app.get('/cache', cachePage(4), (req, res) => {
    setTimeout(() => {
        const date = new Date();
        let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        res.render('cached', { time });
    }, 3000);
});

// !important
app.post('/', multerConfig.single('image'), (req, res) => {
    const userName = req.body.username;
    const imgUrl = path.join('uploads', req.file.filename);
    res.render('index', { imgUrl, userName });
});


app.listen(PORT, () => {
    console.log(`Server on - ${PORT}`);
});
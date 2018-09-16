const request = require('request');
const fs = require('fs');
const zlip = require('zlib');

let req = request('http://techub.ge');

// req.pipe(process.stdout);

// req.pipe(fs.createWriteStream('techub.html'));

req.pipe(zlip.createGzip()).pipe(fs.createWriteStream('techub.html.gz')); // !important
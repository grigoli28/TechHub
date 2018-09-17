const request = require('request');

request('http://techub.ge', (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});
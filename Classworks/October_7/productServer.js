const express = require('express');
const app = express();


let id = 0;
let products = [
    { name: 'Apple', id: id++ },
    { name: 'Samsung', id: id++ },
    { name: 'Sony', id: id++ }
];


app.get('/product/:productId', (req, res) => {
    const id = req.params.productId;
    const product = products.find(prod => prod.id == id);
    if (!product) {
        res.sendStatus(404);
    } else {
        res.json(products[id]);
    }
});


app.get('/products', (req, res) => {
    if (req.query.byName == 'true') {
        const name = req.query.name;
        const product = products.find(prod => prod.name == name);
        if (!product) {
            return res.sendStatus(404);
        } else {
            return res.json(product);
        }
    }
    res.json(products);
});


app.post('/products/:id/:name', (req, res) => {
    products.push({ name: req.params.name, id: Number(req.params.id) });
    res.send('Added Succesfully');
});


app.listen(3000);
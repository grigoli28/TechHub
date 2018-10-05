const express = require('express');
const app = express();


let id = 0;
let products = [
    { name: 'Apple', id: id++, price: 4000 },
    { name: 'Samsung', id: id++, price: 3500 }
];


app.get('/products', (req, res) => {
    res.send(
        products.map(product => {
            return `<h2 id="product-${product.id}"
            onclick="window.location.replace('http://localhost:3000/products/${product.id}')">
            ${ product.name }</h2>`
        }).join(' ')
    );
});



app.get('/products/:productId', (req, res) => {
    const id = req.params.productId;
    const product = products.find(prod => prod.id == id);

    let response = "Product not found!";

    if (product) {
        response = `
        <a href="http://localhost:3000/products">Go Back</a>
        <h1>${product.name}</h1>
        <hr>
        <h2>Product $${product.price}, Id - ${product.id}</h2>
        <hr>
        `;
    }

    res.send(response);
});



app.post('/products/:id/:name/:price', (req, res) => {
    let product = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }
    products.push(product);
    res.json({ message: 'product created successfuly', product }); // !important
});


app.delete('/products/:id', (req, res) => {
    const id = products.findIndex(p => p.id == req.params.id);
    const product = products[id];
    products.splice(id, 1);
    res.json({ message: 'product deleted successfuly', product });
});


app.listen(3000);
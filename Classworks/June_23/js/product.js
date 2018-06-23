let product = {
    name: "Laptop",
    price: 1200
}
product.price = 1000;
alert(`Name: ${product.name}`);
alert(`Price: ${product.price}`);

delete product.name;
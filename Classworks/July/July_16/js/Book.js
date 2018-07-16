class Product {
    constructor(id, name, price) {
        this._id = id;
        this.name = name;
        this.price = price;
    }
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name.length === 0) {
            console.log('Name Error');
            return;
        }
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(val) {
        if (val <= 0) {
            console.log('Price Error');
            return;
        }
        this._price = val;
    }

    makeDiscount(discount) {
        this.price = this.price * discount / 100;
    }

    print() {
        console.log(`Name: ${this.name}, Price: ${this.price}, ID: ${this.id}`);
    }

    static compare(productA, productB) {
        return productA.price - productB.price;
    }
}


class Book extends Product {
    constructor(id, name, price, authors, pubDate) {
        super(id, name, price);
        this.authors = authors;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`Authors: ${this.authors}, Publication Date: ${this.pubDate}`);
    }
}
// extending classes
// super.method()
// instanceOf
// .filter()




/*  */


class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped.`)
    }

    static compare(a, b) {
        return a.speed - b.speed;
    }
}


class Mouse extends Animal {
    // constructor(name, earLength) {
    //     super(name);
    //     this.earLength = earLength;
    // }

    hide() {
        console.log(`${this.name} hides.`)
    }

    stop() {
        super.stop();
        this.hide();
    }
}


let jerry = new Mouse('Jerry', 3);

// jerry.run(120);
// jerry.hide();
// jerry.stop();
// console.log(jerry.earLength);

let mice = [
    new Mouse('Big Rat', 5),
    new Mouse('Batman', 3),
    new Mouse('Jerry', 4),
]

// mice.sort(Mouse.compare);
// mice[0].run();





class myArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}


let myArr = new myArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40);
// console.log(`myArr.isEmpty - ${myArr.isEmpty()}`);

let filteredArr = myArr.filter(item => item >= 10);
// console.table(filteredArr);
// console.log(`myArr.isEmpty - ${filteredArr.isEmpty()}`);

console.log(jerry instanceof Animal);
console.log(jerry instanceof Mouse);
console.log(myArr instanceof Animal);
// push/pop/peak


class Stack {
    constructor() {
        this.length = 0;
        this.tasks = {};
    }

    push(task) {
        this.tasks[this.length] = task;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        let task = this.tasks[this.length];
        delete this.tasks[this.length];
        return task;
    }


    isEmpty() {
        return this.length === 0;
    }


    size() {
        return this.length;
    }


    peek() {
        return this.tasks[this.length - 1];
    }


    forEach(func) {
        for (let i = 0; i < this.length; i++) {
            func(this.tasks[i], i, this.tasks);
        }
        for (let i in this.tasks) {
            func(this.tasks[i], i, this.tasks);
        }
        let keys = Object.keys(this.tasks);
        for (let i of keys) {
            func(this.tasks[i], i, this.tasks);
        }
    }
}



let myStack = new Stack();

myStack.push('Hello');
myStack.push('World');
myStack.push('!...');
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.isEmpty());


myStack.forEach((elem, ind, arr) => {
    console.log(elem, ind, arr);
})
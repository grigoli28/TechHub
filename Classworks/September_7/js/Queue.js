class Queue {
    constructor() {
        this.tasks = [];
    }

    enqueue(task) {
        this.tasks.push(task);
    }

    dequeue() {
        return this.tasks.shift();
    }

    top() {
        return this.tasks[0];
    }

    log() {
        console.log(this.tasks);
    }
}


class PQueue {
    constructor() {
        this.tasks = [];
    }

    enqueue(task) {
        if (this.isEmpty()) {
            this.tasks.push(task);
        } else {
            for (let i = 0; i < this.tasks.length; i++) {
                if (task[1] < this.tasks[i][1]) {
                    this.tasks.splice(i, 0, task);
                    return;
                }
            }
            this.tasks.push(task);
        }
    }

    dequeue() {
        return this.tasks.shift();
    }

    isEmpty() {
        return this.tasks.length === 0;
    }

    top() {
        return this.tasks[0];
    }

    log() {
        console.log(this.tasks);
    }
}


/* let myQueue = new Queue();
myQueue.enqueue('1');
myQueue.enqueue('3');
myQueue.enqueue('5');
myQueue.enqueue('7');
myQueue.log();
console.log(myQueue.top());
myQueue.dequeue();
myQueue.log();
console.log(myQueue.top()); */


let pQueue = new PQueue();

pQueue.enqueue(['Task', 1]);
pQueue.enqueue(['Task 2', 2]);
pQueue.enqueue(['Task 3', 3]);
pQueue.enqueue(['Task 4', 1]);

pQueue.log();
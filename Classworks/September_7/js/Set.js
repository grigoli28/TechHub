class Set {
    constructor() {
        this.tasks = [];
        this.length = 0;
    }


    add(elem) {
        if (!this.tasks.includes(elem)) {
            this.tasks.push(elem);
        }
        this.length++;
        return this;
    }

    has(elem) {
        return this.tasks.includes(elem);
    }

    remove(elem) {
        let index = this.tasks.indexOf(elem);
        this.tasks.splice(index, 1);
        this.length--;
    }

    subSet(set) {
        for (let value of set.values()) {
            if (!this.has(value)) {
                return false;
            }
        }
        return true;
    }


    inter(set) {
        let tmpSet = new Set();
        for (let value of set.values()) {
            if (this.has(value)) {
                tmpSet.add(value);
            }
        }
        return tmpSet;
    }

    values() {
        return this.tasks;
    }

    log() {
        console.log(this.tasks);
    }

    isEmpty() {
        return this.length === 0;
    }
}


let set = new Set();

set.add(3);
set.add(5);
set
    .add(3)
    .add(4)
    .add(6);
// console.log(set.has(13));
// console.log(set.has(3));
set.log();


let set2 = new Set();
set2.add(3);
set2.add(5);
set2.add(9);
set2.log();

console.log(set.subSet(set2));


let inter = set.inter(set2);
inter.log()
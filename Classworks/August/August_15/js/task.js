// Flyweight Pattern



let Task = function(data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
}


Task.prototype.getPriority = function() {
    this.flyweight.priority;
}


function FlyWeight(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
}


let FlyweightFactory = function() {
    let flyweights = {};
    let get = function(project, priority, user, completed) {
        let currentObjKey = project + priority + user + completed;
        if (!flyweights[currentObjKey]) {
            flyweights[currentObjKey] = new FlyWeight(project, priority, user, completed);
        }
    }

    let getCount = function() {
        let count = 0;
        for (let f in flyweights) {
            count++;
        }
        return count;
    }

    return {
        get,
        getCount
    }

}();



function TaskCollection() {
    let tasks = {};
    let count = 0;
    let add = function(data) {
        tasks[data.name] = new Task(data);
        count++;
    }
    let get = function(name) {
        return tasks[name]
    }

    let getCount = () => count;

    return {
        add,
        get,
        getCount
    }
}



let tasks = TaskCollection();

let projects = ['none', 'HTML5', 'Javascript', 'CSS3'];


let priorities = [1, 2, 3, 4, 5];

let users = ['Gela', 'Jora', 'Jeka', 'Jimsheri', ];

let completed = [true, false];
let initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 100000; i++) {
    tasks.add({
        name: `Task-${i}`,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    });
}

let afterInitial = process.memoryUsage().heapUsed;
console.log(`Used Memory ${(afterInitial - initialMemory) / 100000}`);

console.log(`Tasks - ${tasks.getCount()}`);
console.log(`FlyWeights - ${FlyweightFactory.getCount()}`);
// require()

let Task = require('./task');

let notificationService = function() {
    let message = 'Notifying';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}

let loggingService = function() {
    let message = 'Logging';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}

let auditingService = function() {
    let message = 'Auditing';
    this.update = function(task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    }
}


function ObserverList() {
    this.obesrverList = [];
}


ObserverList.prototype.add = function(obj) {
    return this.obesrverList.push(obj);
}

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.obesrverList.length) {
        return this.obesrverList[index];
    }
}

ObserverList.prototype.count = function() {
    return this.obesrverList.length;
}

ObserverList.prototype.indexOf = function(obj, startIndex = 0) {
    let i = startIndex;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}

ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
}


let ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}


ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}


ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
}


ObservableTask.prototype.notify = function(context) {
    let obesrverCount = this.observers.count();
    for (let i = 0; i < obesrverCount; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function(context) {
    this.notify(this);
    Task.prototype.save.call(this);
}

let task1 = new ObservableTask({
    name: 'Observable Demo',
    user: 'Observable'
});


let not = new notificationService();
let logs = new loggingService();
let audit = new auditingService();


task1.addObserver(not.update);
task1.addObserver(logs.update);
task1.addObserver(audit.update);

task1.save();
task1.removeObserver(audit);
task1.save();
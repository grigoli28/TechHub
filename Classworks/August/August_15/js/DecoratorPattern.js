// Decorator Pattern

console.log('Hello Node');

let Task = function(name) {
    this.name = name;
    this.completed = false;

}

Task.prototype.complete = function() {
    console.log(`Completing Task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log(`Saving Task: ${this.name}`);
}


let myTask = new Task('I have to learn JS');

myTask.complete();
myTask.save();


let decorMyTask = new Task('Decorated Task');

decorMyTask.priority = 2;
decorMyTask.notify = function() {
    console.log('Notifying important people');
}


decorMyTask.complete();
decorMyTask.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

decorMyTask.save();
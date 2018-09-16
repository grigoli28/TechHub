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


let mediator = (function() {
    let channels = {};
    let subscribe = function(channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context,
            func
        });
    }

    let publish = function(channel, ...args) { // !important using rest parameters
        if (!this.channels[channel]) {
            return false;
        }
        // let args = Array.prototype.slice.call(arguments, 1);

        for (let i = 0; i < mediator.channels[channel].length; i++) {
            let sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        channels: {},
        subscribe,
        publish
    }
})();


let task1 = new Task({
    name: 'Mediator pattern demo',
    user: 'John'
});


let not = new notificationService();
let logs = new loggingService();
let audit = new auditingService();


mediator.subscribe('Complete', not, not.update);
mediator.subscribe('Complete', logs, logs.update);
mediator.subscribe('Complete', audit, audit.update);


task1.complete = function() {
    mediator.publish('Complete', this);
    Task.prototype.complete.call(this);
}


task1.complete();
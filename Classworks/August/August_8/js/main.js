// Regular Expression
// PCRE, *POSIX RX engines
// Publish/Subscribe Pattern

// \n \t \r \v \b
// delimiters "/ /"
// modifiers (g, i, m, ?, *, +, ^)
// i - incase-sensitive, m - multi line, ? - once at least, * - zero or more, + - once at least
// regexp.exec()
// string.match(regexp),
// string.replace(regexp, str)



// /abc/
// /[abc]/
// /[a-z]/
// /[a-zA-Z]/ == /[A-z]/
// /[0-9]/
// /#[A-F0-9]+/
// /#?[A-F0-9]+/
// /#?[A-F0-9]{6}/
// /#?[A-F0-9]{6}|[A-F0-9]{3}/
// /^#?([A-F0-9]{6}|[A-F0-9]{3})$/
// /^[\t\n\r]*#?([A-F0-9]{6}|[A-F0-9]{3})[\t\n\r]*$/
// [\t\n\r] === \s
// /^\s*#?([A-F0-9]{6}|[A-F0-9]{3})\s*$/





/* let myStr = `Product $13
            Product $27
            Product $112`;

let myRX = /[$0-9]+/g;
let result = myRX.exec(myStr);
let res = myStr.match(myRX);
console.log(res, result); */








/* PubSub Pattern */
let PubSub = (function() {
    let events = {};
    return {
        subscribe(event, callback) {
            if (!events[event]) {
                events[event] = {
                    queue: []
                }
            }
            let index = events[event].queue.push(callback) - 1;
            return (function() {
                console.log(events)
                return {
                    remove() {
                        delete events[event].queue[index];
                    }
                }
            })(event, index);
        },
        publish(event, detail) {
            if (!events[event] || !events[event].queue.length) return;
            let callbacks = events[event].queue;
            for (let i = 0, ln = callbacks.length; i < ln; i++) {
                if (typeof callbacks[i] === 'function') {
                    callbacks[i](detail || {});
                }
            }
        }
    };
})();



let sub_1 = PubSub.subscribe('/onAdd', (data) => {
    console.log('Sub_1', data);
});

let sub_2 = PubSub.subscribe('/onAdd', (data) => {
    console.log('Sub_2', data);
});

PubSub.subscribe('/onRemove', (data) => {
    console.log('/onRemove', data);
});

PubSub.publish('/onAdd', { name: 'PubSub Pattern Example' });
PubSub.publish('/onRemove', { name: 'PubSub Pattern Example' });
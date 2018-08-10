/* function add(a, b) {
    this.postMessage(a + b);
}

function sub(a, b) {
    this.postMessage(a - b);
}

self.addEventListener('message', function(e) {
    switch (e.data.type) {
        case 'add':
            add.apply(this, e.data.nums);
            break;
        case 'sub':
            sub.apply(this, e.data.nums);
            break;
        case 'doLazy':
            for (let i = 0; i < 100000000; i++) {}
            self.postMessage('doLazy');
            break;
    }
}); */







self.addEventListener('message', function(e) {
    switch (e.data.type) {
        case 'add':
            add.apply(this, e.data.nums);
            break;
        case 'sub':
            sub.apply(this, e.data.nums);
            break;
        case 'doLazy':
            for (let i = 0; i < 100000000; i++) {}
            self.postMessage('doLazy');
            break;
    }
});
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










/*  */
let functions = {};


self.addEventListener('message', function(e) {
    let result = null;
    try {
        switch (e.data.type) {
            case 'registerFunction':
                functions[e.data.name] = new Function(e.data.parameters, e.data.body);
                break;
            default:
                if (functions[e.data.type]) {
                    result = {
                        isError: false,
                        value: functions[e.data.type].apply(null, e.data.nums)
                    };
                }
                break;
        }
    } catch (error) {
        result = {
            isError: true,
            value: error
        }
    }

    this.postMessage({
        processId: e.data.processId,
        result
    });

});
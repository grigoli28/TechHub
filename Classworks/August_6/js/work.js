// Web Workers (Dedicated & Shared)
// 'self' is global object !important
// self.postMessage()
// self.close()

self.addEventListener('message', (event) => {
    self.close();
    self.postMessage(`Thank You! You said: "${event.data}"`);
}, false);
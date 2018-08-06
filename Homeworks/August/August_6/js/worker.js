self.addEventListener('message', function(message) {
    fetch(message.data, {
        method: 'get'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(users => {
        self.postMessage(users);
        self.close();
    })
})
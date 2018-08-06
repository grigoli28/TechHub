self.addEventListener('message', function(event) {
    fetch(event.data, {
        method: 'get'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(users => {
        self.postMessage(users);
    })
})
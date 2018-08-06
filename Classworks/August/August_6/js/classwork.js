let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let storage = window.localStorage;

const usersDiv = document.querySelector('#users');

let worker = new Worker('js/worker.js');



if (!storage.getItem('DataAlreadyLoaded')) {
    worker.postMessage(usersUrl);
    storage.setItem('DataAlreadyLoaded', true);
} else {
    let users = getUsers();
    printUsers(usersDiv, users);
}



worker.addEventListener('message', function(event) {
    console.log(event.data);
    event.data.forEach(setUser);
    printUsers(usersDiv, event.data);
})


function edit(userId) {
    let name = prompt('Please Enter Name: ');
    let city = prompt('Please Enter City: ');
    let street = prompt('Please Enter Street: ');
    let user = JSON.parse(storage.getItem(userId));
    user.name = name;
    user.address.city = city;
    user.address.street = street;
    storage.setItem(userId, JSON.stringify(user));
}

function remove(userId) {
    storage.removeItem(`${userId}`)
}


function setUser(user) {
    storage.setItem(user.id, JSON.stringify({
        id: user.id,
        name: user.name,
        address: {
            city: user.address.city,
            street: user.address.street
        }
    }));
}

function getUsers() {
    let users = [];
    for (let i = 1; i <= 10; i++) {
        users.push(JSON.parse(storage.getItem(`${i}`)));
    }
    return users;
}


function printUsers(elem, users) {
    elem.innerHTML =
        users.map(function(user) {
            return `<p data-user-id="${user.id}"><b>${user.name}</b>, ${user.address.city}, ${user.address.street} Str. [ <span id="edit" onclick="edit(${user.id})">Edit : </span><span id="remove" onclick="remove(${user.id})">Remove</span>]</p>`;
        }).join('');
}
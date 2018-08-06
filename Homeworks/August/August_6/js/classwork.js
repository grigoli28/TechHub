let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let storage = window.localStorage;

const usersDiv = document.querySelector('#users');

let worker = new Worker('js/worker.js');


if (!storage.getItem('usersAlreadyLoaded')) {
    storage.setItem('usersAlreadyLoaded', true);
    worker.postMessage(usersUrl);
} else {
    printUsers(usersDiv, getUsersFromStorage());
}


worker.addEventListener('message', function(message) {
    setUsersInStorage(message.data);
    storage.setItem('currentUserIds', JSON.stringify(message.data.map((user) => user.id)));
    printUsers(usersDiv, message.data);
})



function edit(userId) {
    let name = prompt('Please Enter the Name:');
    let city, street;
    (name != undefined) && (city = prompt('Please Enter the City:'));
    (city != undefined) && (street = prompt('Please Enter the Street:'));

    if ((name && city && street) != null) {
        let user = JSON.parse(storage.getItem(`user-${userId}`));
        let userElem = document.querySelector(`[data-user-id="${userId}"]`);

        user.name = name;
        user.address.city = city;
        user.address.street = street;
        storage.setItem(`user-${userId}`, JSON.stringify(user));

        userElem.innerHTML = `<i>Name: </i><b>${user.name}</b>,<br><i>Address: </i>${user.address.city} City, ${user.address.street} Street [ <span id="edit" onclick="edit(${userId})">Edit</span><b> : </b><span id="remove" onclick="remove(${userId})">Remove</span> ]`;
    }
}


function remove(userId) {
    storage.removeItem(`user-${userId}`);
    removeUserFromArr(userId);
    if (!getUsersFromStorage().length) {
        storage.removeItem('usersAlreadyLoaded');
        storage.removeItem('currentUserIds');
    }
    document.querySelector(`[data-user-id="${userId}"]`).remove();
}


function setUsersInStorage(users) {
    users.forEach(user => {
        storage.setItem(`user-${user.id}`, JSON.stringify({
            id: user.id,
            name: user.name,
            address: {
                city: user.address.city,
                street: user.address.street
            }
        }));
    })
}


function getUsersFromStorage() {
    let userIds = JSON.parse(storage.getItem('currentUserIds'));
    let users = [];
    for (let id of userIds) {
        users.push(JSON.parse(storage.getItem(`user-${id}`)));
    }
    return users;
}


function removeUserFromArr(userId) {
    let users = JSON.parse(storage.getItem('currentUserIds'));
    users.splice(users.indexOf(userId), 1);
    storage.setItem('currentUserIds', JSON.stringify(users));
}


function printUsers(elem, users) {
    elem.innerHTML =
        users.map(function(user) {
            return `<p data-user-id="${user.id}"><i>Name: </i><b>${user.name}</b>,<br><i>Address: </i>${user.address.city} City, ${user.address.street} Street [ <span id="edit" onclick="edit(${user.id})">Edit</span><b> : </b><span id="remove" onclick="remove(${user.id})">Remove</span> ]</p>`;
        }).join('');
}
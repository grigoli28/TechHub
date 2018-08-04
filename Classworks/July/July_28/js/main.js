// REST API
// GET POST PUT PATCH DELETE
// .json()
// .join('')
// Promise.all
// Promise.resolve
// ASYNC Functions



let usersEndPoint = 'https://jsonplaceholder.typicode.com/users';


fetch(usersEndPoint, {
        method: 'get'
    })
    .then(response => {
        // console.log(response);
        if (response.status === 200) {
            // console.log('Successul');
            return response.json();
        }
    })
    .then(usersList => {
        console.log(usersList);
        document.body.innerHTML = usersList.map(user => {
            return `<div>
                            <big>${user.name}, <strong> Id : ${user.id}</strong></big>
                        </div>`
        }).join('');
    })
    .catch(error => {
        console.log(`Error : ${error.message}`);
    });






/* 
fetch(usersEndPoint, {
        method: 'get'
    })
    .then(response => {
        // console.log(response);
        if (response.status === 200) {
            // console.log('Successul');
            return response.json();
        }
    })
    .then(usersList => {
        // console.log(usersList);
        document.body.innerHTML = usersList.map(user => {
            return `<div  data-user-id="${user.id}">
                    <strong>${user.name}, <small> Id : ${user.id}</small></strong>
                    </div>`
        }).join('');
        let users = document.querySelectorAll('[data-user-id]');
        users.forEach(user => {
            user.addEventListener('click', event => {
                // console.log('I am an event', event.target);
                let userDiv = event.target;
                // DIV
                if (userDiv.tagName.toLowerCase() != 'div') {
                    while (userDiv.tagName.toLowerCase() != 'div') {
                        userDiv = userDiv.parentNode;
                    }
                }
                // DIV Element[data-user-id]
                console.log(userDiv.dataset.userId);
                let userId = user.dataset.userId;
                showDetailsById(userId);
            }, false)
        })
        console.log(users)
    })
    .catch(error => {
        console.log(`Error : ${error.message}`);
    });




function showDetailsById(userId) {
    // console.log(`${usersEndPoint}/${userId}`);
    fetch(`${usersEndPoint}/${userId}`, {
            method: 'get'
        })
        .then(response => {
            // console.log(response);
            if (response.status === 200) {
                // console.log('Successul');
                return response.json();
            }
        })
        .then(userDetail => {
            document.body.innerHTML = `
                <div class="user__detail--item">
                    <h2>${userDetail.name}</h2>
                    <h3>Phone : ${userDetail.phone}</h3>
                    <h3>Website : ${userDetail.website}</h3>
                    <h3>Email : ${userDetail.email}</h3>
                </div>
            `;
        })
        .catch(error => {
            console.log(`Error : ${error.message}`);
        });
}
*/





/*  
// function makePromise(time) {
//     return new Promise(function(resolve, reject) {
//         // console.log('Start Promise');
//         setTimeout(() => {
//             if (time > 3000) {
//                 // console.log('Rejecting')
//                 reject(new Error('Too Long Time'));
//             } else {
//                 // console.log('Resolving')
//                 resolve(`Okay its ${time}`);
//             }
//         }, time);
//     });
// }



// let sec1 = makePromise(1000);
// sec1.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error.message)
// });


// let sec2 = makePromise(2000);
// sec2.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error.message)
// });


// let sec3 = makePromise(3000);
// sec3.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error.message)
// });


// let sec4 = makePromise(4000);
// sec4.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error.message)
// });




// let allPromises = Promise.all([sec1, sec2, sec3, sec4]);
// allPromises.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });



// let allRace = Promise.race([sec1, sec2, sec3, sec4]);
// allRace.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });




// let resolvedPromise = Promise.reject('Resolved Promise Example');
// resolvedPromise.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log("Error", error);
// });
*/










/* ASYNC Functions


// Rewrite following code with async functions !important
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));


async function getJson() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let json = await response.json();
        // console.log(json);
        return json;
    } catch (err) {
        console.log(err);
    }
}

async function getJson2() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        // console.log(json);
        return json;
    } catch (err) {
        console.log(err);
    }
}

// getJson();



// Async Function Syntaxes
// Anonymous Async Function
let func = (async function() {
    // code
})();


// Async Function declaration
async function myAsync() {
    // code
}


// Async Function expression/assignment
let myAsyncFunc = async function() {
    // code
}


// Async Arrow Function
let myAsyncFuncArrow = async() => {
    // code
}


// element.addEventListener('click', async function(event) {});



// Object & Class Async Methods
let myObject = {
    async method() {
        // code
    }
}

class myClass {
    async method() {
        // code
    }
}


async function funcPromiseAll() {
    let [first, second] = await Promise.all([getJson(), getJson2()]);
    // await first; // !important
    // await second;
    console.log(first);
    console.log(second);
}



funcPromiseAll();
*/
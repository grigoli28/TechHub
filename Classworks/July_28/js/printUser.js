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
            return `<div  data-user-id="${user.id}" onclick="showDetailsById(${user.id})">
                    <h2>${user.name}, <small> Id : ${user.id}</small></h2>
                    </div>`
        }).join('');
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
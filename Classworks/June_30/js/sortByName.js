let sortByName = function(users) {
    let sorted = users.sort((user1, user2) => {
        return user1.name > user2.name
    })
    return sorted;
}

let john = { name: 'John', age: 25 };
let adam = { name: 'Adam', age: 30 };
let mary = { name: 'Mary', age: 28 };

let arr = [john, adam, mary];
sortByName(arr);
alert(arr[1].name);
console.table(arr);
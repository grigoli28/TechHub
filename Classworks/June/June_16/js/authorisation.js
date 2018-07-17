let user = prompt("Enter user name", "");

if (user == "Admin") {
    let password = prompt("Enter a password", "");
    if (password == "TheMaster") {
        alert("Welcome");
    } else if (password == null || password == "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

} else if (user == null || user == "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}
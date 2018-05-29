/* ================ Scope =============== */

// function multiply() {
//     var a = 2;
//     var b = 5;
//     alert(a * b);
// }
// multiply();
// alert(a); // gives error, a is not defined; a is in multiply functioin scope only;

// var a = 2;
// var b = 5;
// function multiply() {
//     alert(a * b);
// }
// multiply();
// alert(a); // this time it works, as a is in global scope and not in multiply funtion scope only;



/* =================== Objects =================== */

// var phone = new Object();
// phone["manufacturer"] = "Apple";
// phone["model"] = "Iphone";
// phone["color"] = "silver";
// console.log(phone);
// alert(phone); // this command is wrong, we can not alert whole object;

// var phone = new Object();
// phone.manufacturer = "Apple";
// phone.model = "Iphone";
// phone.color = "silver";
// console.log(phone);

// var phone = {
//     manufacturer: "Apple",
//     model: "Iphone",
//     color: "silver",
//     features: {
//         bluetooth: true,
//         wifi: true,
//         GPS: false
//     }
// }
// console.log(phone.features.bluetooth);
// function yourPhone() {
//     alert("Manufacturer: " + phone.manufacturer);
// }
// yourPhone();
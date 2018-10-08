// alert("Javascript is working");
// alert(10 - 3);
// console.log(15-6, "this is first console log"); // often used for debugging, to get error messages in console 


// document.write(24-5); // used for writing in a html document
// document.write("Hello");


// document.getElementById("title").innerHTML = "Displaying Javascript";


// var pageTitle = "Displaying Javascript";
// document.getElementById("title").innerHTML = pageTitle;



/* ======== Variables and their actions =========== */

// var number1;
// var _number2 = 10 + 5;
// number1 = 6;
// var $total = number1 + _number2;
// alert($total);
// alert($number1 / _number2);
// number1++; number1--;
// ++number1; --number1;


/*
== Equal value
===  Equal value and equal type
*/
// alert(5 == "5") // this is true
// alert(5 === 5) // this is true
// alert(5 === "5") // this is false


// var firstName = "Grigol";
// var lastName = "Tchkoidze";
// console.log(firstName + lastName);
// var quote = 'my name is "Grigol"';
// console.log(quote);
// var name = "Grigoli";
// document.write(name + " is " + 20);
// var name = "METALLICA";
// var nameLength = name.length;
// console.log(nameLength);

/*================== End ===============*/



/*================== Mini Challenge ===============*/

// var name = "Grigoli";
// var score = 0;
// score++;
// var displayscore = "<h3>" + name + "'s score is " + score + " points</h3>";
// document.write(displayscore);

/*================== End ===============*/


/*================= String methods =============*/

// var string = "Learning Javascript";
// var newString = string.toUpperCase(); // converts all characters to upper case
// alert(string);
// alert(newString);

// var _string = "JAVASCRIPT IS FUN";
// var _newString = _string.toLowerCase(); // converts all characters to lower case
// alert(_string);
// alert(_newString);

// var $string = "I want to learn javascript because it is boring";
// var $newString =  $string.replace("boring", "fun");
// alert($string);
// alert($newString);

// var string = "Learning Javascript";
// var _newString = string.split(""); // splits into separate characters
// var newString = string.split(" "); // splits where first space is
// var part1 = newString[0];
// var part2 = newString[1];
// alert(_newString); alert(newString);
// alert(part1); alert(part2);

// var joinedString = newString[0].concat(newString[1]); // joins strings
// alert(joinedString);

// var $string = "Learning is FUN";
// var $newString = $string.slice(0, 8);
// alert($newString);

/*================== End ===============*/



/*================= Mini Challenge =================*/

// var name = "cHris diXon";
// var nameLowCase = name.toLowerCase();
// var nameSep = nameLowCase.split(" ");
// nameSep[0] = "C" + nameSep[0].slice(1, 5);
// nameSep[1] = "D" + nameSep[1].slice(1, 5);
// var newName = nameSep[0].concat(" " + nameSep[1]);
// alert(newName);

/*================== End ===============*/
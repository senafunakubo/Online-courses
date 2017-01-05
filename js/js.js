alert("Nemui");
document.write("nemui");

// it is for developers. Visiter cannot see it.
console.log("This is text that will be sent directly to the console to let us know that our program completed successfully");

//Variable is used to keep track of (represent) information when it comes to programming in Javascript.
var example = "I am a variable!";
document.write(example);

//Javascript reads codes from top to bottom then following one is differnt to previous one.
//Variable cannot start with a number but they can end in a number. ex)nemui178
//variables can also only contain Letters, Numbers, $ , _
example= "This is another example.";
document.write(example);

//The two types of values that  we can add to a variable are strings and numbers
//Strings are used for storing text, and words.
//variable doesnt need "" !!!!!!!!!!!

var VisitorName = prompt("What is your name?");
var VisitorAge = prompt("What is your age?");

// for a string, we need "" . if we want to combine them, we also need + .
// It is called "Concatenation".
document.write("Hello, " + VisitorName + "Your age is " + VisitorAge);


var hotText = 'MDN';
var URL = 'https://developer.mozilla.org/';

document.write('Click to return to ' + hotText.link(URL));


//assigning a string to a variable
var Strings1 = ("I am a string!");
//assigning a number to a variable, no "" for numbers
var Numbers1 = 5;

var UserNumber = prompt("Pick your first number");

//To change a string to a number
UserNumber = parseInt(UserNumber);

var RNumber = Math.floor(Math.random() * UserNumber) +1;

alert(" Your random number is " + RNumber);

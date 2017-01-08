var laundryRoom = "Basement";
var mailRoom = "Room 1A";
console.log("Laundry: " + laundryRoom +  ", Mail: " + mailRoom);

function myApartment(){
  var mailBoxNumber = "Box 3";
  laundryRoom = "In-unit";
  console.log("Mail box: " + mailBoxNumber + ", Laundry: " + laundryRoom);
}

// console.log(mailBoxNumber);
// if I write this code here, nothing showed up in the console!
// JavaScript does not have access to the variable, since it is hidden away in the myApartment function.

myApartment();
 // To see the hidden variables inside the function,
 // delete the console.log on mailBoxNumber in the global scope, and call the myApartment function instead like this.


var bucketList = ["buying Udon", "studying Javascript", "calling my mom"];
var listItem = bucketList[3];
console.log(listItem);
//Nothing showed up in the console because "buying Udon" = 0, "Studying~" =1, "calling~" = 2.


var bucketList = ['Rappel into a cave', 'Take a falconry class'];
console.log(bucketList.length);
// Output: 2


var bucketList = ['item 0', 'item 1', 'item 2'];
bucketList.push('item 3', 'item 4');
// 1.It connects to bucketList with a period.
// 2.Then we call it like a function.
//    That's because push() is a function and one that JavaScript allows us to use right on an array.


var vacationSpots = ["Alaska","India","Hawaii"];

for(var i = 0; i < vacationSpots.length; i++){
 console.log("I would like to visit " + vacationSpots[i]);}
//  1.Within the for loop's parentheses, the start condition is var i = 0, which means the loop will start counting at 0.
//  2.The stop condition is i < animals.length,
//     which means the loop will run as long as i is less than the length of the animals array.
//     When i is greater than the length of the animals array, the loop will stop looping.
//  3.The iterator is i++. This means that each loop, i will have 1 added to it.
//  4.And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.


var vacationSpots = ["Alaska","India","Hawaii"];
for(var i = vacationSpots.length -1; i >= 0; i--){
 console.log("I would like to visit " + vacationSpots[i]);}
 Nice work! Except we printed 'I would love to visit undefined'. Why did this happen?

 for (var i = vacationSpots.length; i >= 0; i--) {}
 // Except we printed 'I would love to visit undefined'. Why did this happen?
// It's because the length of vacationSpots is 3 and vacationSpots has items in its array at positions 0, 1, and 2.
// Since JavaScript starts from 0, make the start condition the length of the vacationSpots array, minus 1.


var myPlaces = ["Alaska","India","Hawaii"];
var friendPlaces = ["Japan","Alaska","Italy"];

for(var i = 0; i < myPlaces.length; i++){
  for(var j = 0; j < friendPlaces.length; j++){
    if(myPlaces[i] === friendPlaces[j]){
       console.log("match: " + myPlaces[i]);
       }
  }
}
// The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.
// Every time the outter for loop runs once,the inner for loop will run completely.
// With two for loops,we can check to see if any of the your vacation spots match your friend's spots.


var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

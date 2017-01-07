var calculatorOn = false;

// •They begin with the JavaScript keyword function.
// • After function comes the name of the function. pressPowerButton is the name of the function.
//   Notice there are no spaces in the name and each new word is capitalized.
//   This is a convention in the JavaScript community called camelCase.
// • After the function's name, comes parentheses ().

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

// On the last few lines, we make the function run by writing pressPowerButton().
// This term for this is calling the function. We call it with pressPowerButton(),
//  and it runs all the code in the block of the function.
// We executed the code in the block of the function twice without having to write it twice.
//  Functions can make code reusable!

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.


// inputNumber is a parameter.
// When we call the multiplyByThirteen function on the last lines, we set the inputNumber parameter.
//  For instance, multiplyByThirteen(9) calls the multiplyByThirteen function, and sets inputNumber as 9.
//  Then, inside the block of the multiplyByThirteen function, 9 is multiplied by 13,
//  resulting in 117 printing to the console.

function multiplyByThirteen(inputNumber) {
  console.log(inputNumber * 13);
}

multiplyByThirteen(9);
// Output: 117
// inputNumber is a parameter, but when we call multiplyByThirteen(9), the 9 is called an argument.
//  Therefore, arguments are provided when you call a function, and parameters receive arguments as their value.
//  So, inputNumber is a parameter and its value is the argument 9, since we wrote multiplyByThirteen(9).

var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
  // each time the takeOrder function runs, 1 is added to the orderCount.
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
  //return will take the result of the math operation and give it back to whatever calls it.
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));
//つまりorderCount = itemCountとなるので、3*7.5となる？？



var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax(){
  return getSubTotal(orderCount) * 0.06;
}

function getTotal(){
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));
console.log(getTotal());

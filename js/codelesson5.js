function main(){

}$(document).ready(main);
// Notice that we put main inside the parentheses of ready. main here is a callback,
//  which means that our code will wait until the document (in other words, the DOM) is loaded, or ready.
// When it is, then it will execute the main function. jQuery calls back to the main function, therefore it's a callback.

// With plain JavaScript we selected an HTML element with this code:
document.getElementsByClassName('skillset');

// With jQuery we can select the same element with:
$('.skillset');
// We can wrap any CSS selector, like class, id, or tag, with $('.example-class') to select it with jQuery.
// if an element had an id of 'header', you could select it with $('#header').


function main(){
  var $skillset = $(".skillset");
alert($skillset);
}
$(document).ready(main);
// It is a common convention to name variables that hold jQuery selectors with a dollar sign $

// We can hide elements with jQuery, like this:
$('.my-selector').hide();
// The hide function will add the CSS property display: none to the DOM element from the page, which will hide it.

// fadeIn will fade an element in over a period of time in milliseconds. It looks like this:
$('.example-class').fadeIn(400);
// Within fadeIn's parentheses, we can specify how long we want the fade to last in milliseconds. 400 is the default.
// The example code will fade in the '.example-class' element over 0.4 seconds.

// This function will wait for a click event, and when one occurs, it will execute a provided function.
$('.example-class').on('click', function() {
  // execute the code here when .example-class is clicked.
});

// To show an element, the syntax looks as such:
$('.example-class').show();

// toggle will hide or show an element, each time it is triggered. The syntax looks like this:
$('example-class').toggle();
//replace $('.example-class').show(); to this


// We can toggle a CSS class with a jQuery function named toggleClass. The syntax looks like this:
$('.example-class').toggleClass('active')

 // 1. .toggleClass is a function that will toggle a CSS class on the jQuery selector it's connected to.
 //     If the element has the class applied to it, toggleClass will remove it,
 //     and if the element does not have the class, it will add it.
 //
 // 2.'active' is the class that we will toggle on and off.
 //     Notice that toggleClass does not require us to include the period before 'active'
 //     since it's already expecting a CSS class.


 // We can select the specific element we clicked on with the jQuery selector $(this).
 // The syntax looks like this:
 $('.example-class').on('click', function() {
   $(this).toggleClass('active');
 });


//  We can select the specific element we clicked on with the jQuery selector $(this).
//  The syntax looks like this:
$('.example-class').on('click', function() {
  $(this).toggleClass('active');
});

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
		$(this).next().toggle();
    // It is the same to $('.projects').toggle();  にthisの要素を足したもの
    $(this).toggleClass("active");
	});
}

$(document).ready(main);

// When a user clicks on a button,
//  we will permanently change the text of the button to 'Hello world!'.
// We can change the text of an element with the jQuery function text. It's syntax looks like this:

$('.my-selector').text('Hello world!');
// 1. text attaches directly to a jQuery selector.
// 2. Inside of text's parentheses, we can provide text that will become the text of our DOM element.
//    The text we supply will replace any existing text,
//     and if the element has no pre-existing text, text will add it.

// jQuery provides a method named slideToggle that can animate an element's entrance and exit.
//  The syntax looks like this:
 $(this).next().slideToggle(400);

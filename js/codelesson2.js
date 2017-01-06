//Code between curly braces are called blocks. if/else statements have two code blocks.
var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}


//Why is there a \ in 'I lead a muggle\'s life.'? Since the string is surrounded by single quotes,
//we can use a back slash to add a single quote within the string. This is called escaping a character.
var harryPotterFan = true;
if(harryPotterFan){
  console.log("Mischief managed.");
} else{
  console.log("I lead a muggle\'s life.");
}


//The answer is "Time to eat!"
var hungerLevel = 10;
if(hungerLevel > 7){
  console.log("Time to eat!");
} else {
  console.log("Let\'s eat later.");
}


//if two things equal each other, we can use ===
var moonPhase = "full";
if(moonPhase === "full"){
   console.log("Howwwwlll!!");
   } else {
   console.log("I swear I am not awerewolf...");
   }


var stopLight = 'green';

if (stopLight === 'red') {
     console.log('Stop');
   } else if (stopLight === 'yellow') {
     console.log('Slow down');
   } else if (stopLight === 'green') {
     console.log('Go!');
   } else {
     console.log('Caution, unknown!');
   }


//　どちらかがあってれば howwlll, === "full" があるからok
   var moonPhase = 'full';
   var foggyNight = false;

   if (moonPhase === 'full' || foggyNight) {
     console.log('Howwlll!');
   } else if (moonPhase === 'mostly full') {
     console.log('Arms and legs are getting hairier');
   } else if (moonPhase === 'mostly new') {
     console.log('Back on two feet');
   } else {
     console.log('Invalid moon phase');
   }

// どちらも合っていれば　howwlll
var moonPhase = 'full';
var foggyNight = true;

if (moonPhase === 'full' && foggyNight) {
  console.log('Howwlll!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

//It is the same to previous codes.
var moonPhase = 'full';

switch (moonPhase) {
  case "full":
  console.log('Howwlll!');
   break;
  case "mostly full":
  console.log('Arms and legs are getting hairier');
    break;
  case "mostly new":
  console.log('Back on two feet');
    break;
 default:
  console.log('Invalid moon phase');
    break;
}

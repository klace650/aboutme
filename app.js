'use strict'


var correct = 0;
var wrong = 0;

// INTRO  //

// var userName = prompt('Hello, I\'m Klace, whats your name?'); {
//   alert('Hi ' + userName + ', answer the following questions with a "y" or "n" response and learn more about me...sound good?');
//   console.log('User name: ' + userName);
// }
// FIRST QUESTION //

function first(){

    var amIFromSea = prompt('Do you reckon I was born and raised in Seattle?');
    var lowered = amIFromSea.toLowerCase();
    if (lowered === 'y'|| lowered === 'yes'){
      alert('No sorry, I was raised in Montana and moved to Seattle after getting out of the military', ++wrong);
    } else if (lowered === 'n'|| lowered === 'no'){
      alert('Hey thats right! I was raised in Hamilton, Montana and moved here when I got out of the military in 2014.', ++correct);
    } else {
      alert('If you just type yes or no it will help me stay in the scope of the class project...y or n will work too');
  }
}


// SECOND QUESTION //

function second(){
  first();
  var whatBranch = prompt('Was I in the Air Force?');
  var lowered = whatBranch.toLowerCase();
  if (lowered === 'y' || lowered === 'Y') {
    alert('Thats right, I joined the Air Force right out of highschool.', ++correct);
  } else {
    (lowered === 'n' || lowered === 'N')
    alert('Wrong, I was in the Air Force.', ++wrong);
  }
}

console.log('Wrong: '+wrong, 'Correct: '+correct);

// THIRD QUESTION //

function job() {
  second();
  var currentJob = prompt('Is it true that I currently work as a barista at a bakery?');
  if (currentJob === 'y' || currentJob === 'Y') {
    alert('No, sorry. I\'m a bicycle mechanic!');
  } else {
    (currentJob === 'n' || currentJob === 'N')
    alert('You\'re right, my partner is though! She\'s great.');
  }
}

job();




// // FORTH QUESTION //

// function moto() {
//   var favMoto = prompt('I love cheap, reliable, and ugly motorcycles, do you think I ride an XR650?');
//   if (favMoto === 'y' || favMoto === 'Y') {
//     alert('While I would love to have one, Hondas tend to be a little out of a bike mechanic\'s budget. ');
//   } else {
//     (favMoto === 'n' || favMoto === 'N')
//     alert('Thats right, I ride a KLR650 - the cockroach of motorcycles.');
//     finalScore++
//   }
// }

// moto();


// // FIFTH QUESTION //
// function food() {
//   var favFood = prompt('Do you think my favorite food is Pizza?');
//   if (favFood === 'y' || favFood === 'Y') {
//     alert('No, my favorite food is tacos. At least 12 tacos.');
//   } else {
//     (favFood === 'n' || favFood === 'N')
//     alert('You are right, tacos are my favorite food.');
//     finalScore++
//   }
// }

// food();

// // //  SIXTH QUESTION //
// function number() {
//   var magicNum = '3';

//   guessLoop: for (var i = 0; i < 4; i++) {
//     var guessNum = (prompt('Guess an integer between 1 and 10'));
//     if (guessNum === magicNum) {
//       alert('Nice job, the correct number was 3');
//       finalScore++
//       break guessLoop;
//     } else if (guessNum > magicNum) {
//       alert('Guess a lower number');
//     } else if (guessNum < magicNum) {
//       alert('Guess a higher number');
//     }
//   }
//   alert('Well, ' + userName + ' the magic number was 3.')
// }

// number();
// // SEVENTH QUESTION //

// function zip() {
//   var myZips = ['98105', '98103', '98115'];
//   for (var i = 0; i < 6; i++) {
//     var zipGuess = prompt('guess a zip');
//     if (zipGuess === myZips[0])
//       alert('98105 is correct!');
//     else if (zipGuess === myZips[1])
//       alert('98103 is correct!');
//     else if (zipGuess === myZips[2])
//       alert('98115 is correct!');
//     else {
//       alert('Nope, try again.')
//     }
//   }
// }
// zip();

// console.log(finalScore)

// END //


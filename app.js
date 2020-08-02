'use strict'

var finalScore = 0
// INTRO  //

var userName = prompt('Hello, I\'m Klace, whats your name?'); {
  alert('Hi ' + userName + ', answer the following questions with a "y" or "n" response and learn more about me...sound good?');
  console.log('User name: ' + userName);
}
// FIRST QUESTION //

function sea() {
  var fromSea = prompt('Do you think I\'m originally from Seattle?(y/n)');
  if (fromSea === 'y' || fromSea === 'Y') {
    alert('Incorrect. I was raised in Hamilton, Montana.');
  } else {
    (fromSea === 'n' || fromSea === 'N')
    alert('That\'s right, I was raised in Hamilton, Montana.');
    finalScore++
  }
}
sea();

// SECOND QUESTION //
function branch() {
  var whatBranch = prompt('I left Hamilton a month after graduation highschool and joined the military - do you think I joined the Air Force?');
  if (whatBranch === 'y' || whatBranch === 'Y') {
    alert('Thats right, I joined the Air Force right out of highschool.');
    finalScore++
  } else {
    (whatBranch === 'n' || whatBranch === 'N')
    alert('Wrong, I did join the Air Force where I was an AMMO troop.');
  }
}

branch();

// THIRD QUESTION //

function job() {
  var currentJob = prompt('Is it true that I currently work as a barista at a bakery?');
  if (currentJob === 'y' || currentJob === 'Y') {
    alert('No, sorry. I\'m a bicycle mechanic!');
  } else {
    (currentJob === 'n' || currentJob === 'N')
    alert('You\'re right, my partner is though! She\'s great.');
    finalScore++
  }
}

job();


// FORTH QUESTION //

function moto() {
  var favMoto = prompt('I love cheap, reliable, and ugly motorcycles, do you think I ride an XR650?');
  if (favMoto === 'y' || favMoto === 'Y') {
    alert('While I would love to have one, Hondas tend to be a little out of a bike mechanic\'s budget. ');
  } else {
    (favMoto === 'n' || favMoto === 'N')
    alert('Thats right, I ride a KLR650 - the cockroach of motorcycles.');
    finalScore++
  }
}

moto();


// FIFTH QUESTION //
function food() {
  var favFood = prompt('Do you think my favorite food is Pizza?');
  if (favFood === 'y' || favFood === 'Y') {
    alert('No, my favorite food is tacos. At least 12 tacos.');
  } else {
    (favFood === 'n' || favFood === 'N')
    alert('You are right, tacos are my favorite food.');
    finalScore++
  }
}

food();

// //  SIXTH QUESTION //
function number() {
  var magicNum = '3';

  guessLoop: for (var i = 0; i < 4; i++) {
    var guessNum = (prompt('Guess an integer between 1 and 10'));
    if (guessNum === magicNum) {
      alert('Nice job, the correct number was 3');
      finalScore++
      break guessLoop;
    } else if (guessNum > magicNum) {
      alert('Guess a lower number');
    } else if (guessNum < magicNum) {
      alert('Guess a higher number');
    }
  }
  alert('Well, ' + userName + ' the magic number was 3.')
}

number();
// SEVENTH QUESTION //

function zip() {
  var myZips = ['98105', '98103', '98115'];
  for (var i = 0; i < 6; i++) {
    var zipGuess = prompt('guess a zip');
    if (zipGuess === myZips[0])
      alert('98105 is correct!');
    else if (zipGuess === myZips[1])
      alert('98103 is correct!');
    else if (zipGuess === myZips[2])
      alert('98115 is correct!');
      finalScore++
    else {
      alert('Nope, try again.')
    }
  }
}
zip();

console.log(finalScore)

// END //


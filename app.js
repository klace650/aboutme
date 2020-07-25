'use strict'
// INTRO  //
var userName = prompt('Hello, I\'m Klace, whats your name?');{
  alert('Hi '+userName+ ', answer the following questions with a "y" or "n" response and learn more about me...sound good?');
  console.log('User name: '+userName);
} 
// FIRST QUESTION //
var fromSea = prompt('Do you think I\'m originally from Seattle?(y/n)');
  if (fromSea ==='y'){
    alert ('Incorrect. I was raised in Hamilton, Montana.');
  } else { (fromSea === 'n')
    alert ('That\'s right, I was raised in Hamilton, Montana.');
  } 
// SECOND QUESTION //
var whatBranch = prompt ('I left Hamilton a month after graduation highschool and joined the military - do you think I joined the Air Force?');
  if (whatBranch === 'y'){
    alert ('Thats right, I joined the Air Force right out of highschool.');
  } else { (whatBranch==='n')
    alert ('Wrong, I did join the Air Force where I was an AMMO troop.');
  } 
// THIRD QUESTION //
var currentJob = prompt ('Is it true that I currently work as a barista at a bakery?');
  if (currentJob === 'y'){
    alert ('No, sorry. I\'m a bicycle mechanic!');
  } else { (currentJob==='n')
    alert ('You\'re right, my partner is though! She\'s great.');
  } 
// FORTH QUESTION //
var favMoto = prompt ('I love cheap, reliable, and ugly motorcycles, do you think I ride an XR650?');
  if (favMoto === 'y'){
    alert ('While I would love to have one, Hondas tend to be a little out of a bike mechanic\'s budget. ');
  } else { (favMoto === 'n')
    alert ('Thats right, I ride a KLR650 - the cockroach of motorcycles.');
  } 
// FIFTH QUESTION //
var favFood = prompt ('Do you think my favorite food is Pizza?');
  if (favMoto === 'y'){
    alert ('No, my favorite food is tacos. At least 12 tacos.');
  } else { (favFood === 'n')
    alert ('You are right, tacos are my favorite food.');
  }
//  SIXTH QUESTION //

var magicNum = '3'; 

guessLoop: for (var i=0; i < 4; i++){
var guessNum = (prompt('Guess an integer between 1 and 10'));
  if (guessNum === magicNum){
    alert('Nice job, the correct number was 3');
  break guessLoop;
  } else if (guessNum > magicNum){
    alert ('Guess a lower number');
  }  else if (guessNum < magicNum){
    alert('Guess a higher number');
  }
}  
alert('Well, ' +userName+ ' the magic number was 3. Here is some more info about me.')


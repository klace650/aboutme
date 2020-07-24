'use strict'

var userName = prompt('Hello, I\'m Klace, whats your name?');{
  alert('Hi '+userName+ ', answer the following questions with a "y" or "n" response and learn more about me...sound good?');
  console.log('User name: '+userName);
}
var fromSea = prompt('Do you think I\'m originally from Seattle?(y/n)');
  if (fromSea ==='y'){
    alert ('Incorrect. I was raised in Hamilton, Montana.');
  } else { (fromSea === 'n')
    alert ('That\'s right, I was raised in Hamilton, Montana.');
}
var whatBranch = prompt ('I left Hamilton a month after graduation highschool and joined the military - do you think I joined the Air Force?');
  if (whatBranch === 'y'){
    alert ('Thats right, I joined the Air Force right out of highschool.');
  } else { (whatBranch==='n')
    alert ('Wrong, I did join the Air Force where I was an AMMO troop.');
}
var currentJob = prompt ('Is it true that I currently work as a barista at a bakery?');
  if (currentJob === 'y'){
    alert ('No, sorry. I\'m a bicycle mechanic!');
  } else { (currentJob==='n')
    alert ('You\'re right, my partner is though! She\'s great.');
}
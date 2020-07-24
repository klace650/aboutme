'use strict'

var userName = prompt('Hello, I\'m Klace, whats your name?');{
  alert('Hi '+userName+ ', answer the following questions with a "y" or "n" response and learn more about me...sound good?');
  console.log('User name: '+userName);
}
var fromSea = prompt('Do you think I\'m originally from Seattle?(y/n)');
  if (fromSea==='y'){
    alert ('Incorrect. I was raised in Hamilton, Montana.')
  } else { (fromSea === 'n')
    alert ('Thats right, I was raised in Hamilton, Montana.')
}
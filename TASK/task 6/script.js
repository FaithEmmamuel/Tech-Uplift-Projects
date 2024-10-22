'use strict!'

let userName = prompt('What is your name?');
let yes = confirm(`Is your name ${userName}?`);

if (yes) {
    alert(`Nice to meet you ${userName}`);
} else {
    alert('Oh, sorry about that!')
};
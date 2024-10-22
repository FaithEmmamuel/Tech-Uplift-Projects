'use strict!'

let userAge = prompt('How old are you?', 100);

if (userAge > 0) {

    let yes = confirm('Are you sure about your age?');

    if (yes) {
        alert(`Your age is confirmed as ${userAge}`);
    } else {
        alert('Please recheck your age');
    }

} 
'use strict!'

const user = prompt('Username');
const password = prompt('Password');

if (user == 'admin' &&  password == 'password123') {
    alert('Login successful');
} else {
    alert('Invalid username or password')
};
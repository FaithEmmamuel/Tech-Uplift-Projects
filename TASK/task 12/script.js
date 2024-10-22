function countVowels(string) {
    let vowels = 'aeiouAEIOU';

    let counter = 0;

    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            counter += 1;
        }
    }

    return counter;
}

let string = 'find your wAy around';
console.log(countVowels(string));
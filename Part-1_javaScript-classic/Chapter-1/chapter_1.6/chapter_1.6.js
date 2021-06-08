//* Finding and highlighting all instances of a pattern

const searchString = 'Now is the time and this is the time and that is the time';
const pattern = /t\w+e/g;

let matchArray;
let str = '';

// how exec work it's return a special type array
console.log(pattern.exec(searchString))

// check for pattern with regex exec, if no null process
while ((matchArray = pattern.exec(searchString)) !== null) {
    str += `at ${matchArray.index} we found ${matchArray[0]}\n`;
}

console.log(str);

//* my recipe
//* Lets create a function that can represent full details match word and indexes

function matchDetails(regex, str) {
    const details = {};
    let match;

    while (match = regex.exec(str)) {
        if (match[0] in details) {
            details[match[0]].push(match.index);
        } else {
            details[match[0]] = [match.index];
        }
    }

    return details;
}

console.log(matchDetails(pattern, searchString));

const regex = /a(p+).*(pie)/ig;
const result = regex.exec('The apples in the apple pie are tart');

console.log(result)
console.log(result.index);
console.log(result.input);

result.forEach(item => {
    console.log(item);
})
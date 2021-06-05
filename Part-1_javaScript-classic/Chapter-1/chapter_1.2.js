//* Extracting a list from string

const sentence = 'This is one sentence. This is a sentence with a list of items: cherries, limes, oranges, apples, banana. that was the list of items';

//* my recipe by replace
let start = sentence.replace(/[^]+(?=:):\s/g, '');
let end = start.replace(/\.(?<=\.)[^]+/g, '');

let listOfSentence = end.split(', ');
console.log(listOfSentence);

//* book recipe
start = sentence.indexOf(':');
end = sentence.indexOf('.', start + 1);

listOfSentence = sentence.substring(start + 2, end).split(', ');
console.log(listOfSentence);
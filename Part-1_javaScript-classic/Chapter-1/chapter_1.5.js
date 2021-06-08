//* Replacing pattern with new String

const searchString = 'Now is the time, this the tame';
const regex = /t\w{2}e/g;

const replacement = searchString.replace(regex, 'place');

console.log(replacement);
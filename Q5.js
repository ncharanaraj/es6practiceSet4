/* Write an ES6 function that takes an array of strings and returns a new array with each string
capitalized. */

const capitalizeWords = (words) => {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i].toUpperCase());
  }
  return newArray;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

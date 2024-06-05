/* write an ES6 function that takes an array of words and returns an array with all its elements
whose length is greater than 5. */

const filterWords = (words) => {
  let greaterThan5Array = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      greaterThan5Array.push(words[i]);
    }
  }
  return greaterThan5Array;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

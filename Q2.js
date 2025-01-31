/* Write an ES6 function that takes an array of numbers and returns the average of all the
numbers. Avoid using in-built methods. */

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  return average;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

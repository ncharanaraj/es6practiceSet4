/* Write an ES6 function that accepts an array of integers and returns the maximum element in the
array. Avoid using in-built methods. */

const getMaxElement = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > max) {
      max = arr[i + 1];
    }
  }
  return max;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78

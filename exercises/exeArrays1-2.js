const nestedArray = [
  [1, 2, 3],[4, 5, 6],[7, 8, 9],
];

// Υλοποίηση με flat
const flatted = nestedArray.flat()
console.log(flatted)

// Υλοποίηση με reduce και concat
const flatArray = nestedArray.reduce((acc, val) => acc.concat(val))
console.log(flatArray)
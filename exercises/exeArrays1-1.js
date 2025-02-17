const array = ["Athens", "Paris", "London", "Berlin", "Athens"]

console.log(array)

// for (let city of array) {
//   console.log(city)
// }

// Υλοποίηση με Set
function exclude(arr) {
  return [...new Set(arr)]
}

const uniqueArray = exclude(array)
console.log(uniqueArray)

// Υλοποίηση με filter
function removeDuplicates(arr) {
  return array.filter((item, index) => arr.indexOf(item) === index);
}

const newArray = removeDuplicates(array)
console.log(newArray)
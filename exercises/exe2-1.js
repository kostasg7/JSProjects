const array = ["Athens", "London", "Paris"]

array.push("Berlin")

for (let city in array) {
  console.log(array[city])
}
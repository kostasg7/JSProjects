let bag = new Set();

bag.add('Oranges')
bag.add('Apples')

if (bag.has('Apples')) console.log('Has Apples')

  function addToSet(set, ...values) {
    values.forEach(value => set.add(value))
  }

const mySet = new Set();
addToSet(mySet, 1, 2, 3, 4 , 5)

function createSet(...elements) {
  return new Set(elements)
}

const numSet = createSet(1, 10, 30, 100, 100)

// console.log(numSet)

const cities = [{prod: 1, city: "Athens"}, {prod: 2, city: "Athens"}, {prod: 3, city: "Lamia"}]
function getUniqueCities(arr) {
  return[...new Set(arr.map(product => product.city))]
}

console.log(getUniqueCities(cities))
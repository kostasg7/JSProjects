function filterObjectByKeys(obj, keys) {
  const filteredObject = {};

  keys.forEach(key => {
    if (obj.hasOwnProperty(key)) {
        filteredObject[key] = obj[key];
    }
});

return filteredObject
}
const originalObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const keysToKeep = ['a', 'c']

const filterObject = filterObjectByKeys(originalObject, keysToKeep)

console.log(filterObject)
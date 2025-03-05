function mapObjectValues(obj, mappingFunction) {
  const result = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          result[key] = mappingFunction(obj[key]);
      }
  }
  return result;
}


const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObjectValues(originalObject, value => value * 2);

console.log(mappedObject);

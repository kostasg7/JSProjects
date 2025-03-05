function transformObject(obj, transformFunction) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
      const [newKey, newValue] = transformFunction(key, value);
      result[newKey] = newValue;
  }
  return result;
}


const originalObject = { a: 1, b: 2, c: 3 };
const transformedObject = transformObject(originalObject, (key, value) => [key.toUpperCase(), value * 2]);

console.log(transformedObject);

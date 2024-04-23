
// 3. Write a function to deep clone a JSON object, i.e., create a new JSON object with the same structure and values as the original obiect. but not referencing the same memory.

// Problem 3
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  let originalObj = {a: 1, b: {c: 2}};
  let clonedObj = deepClone(originalObj);
  console.log(clonedObj); // Output: {a: 1, b: {c: 2}}
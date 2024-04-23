// 2. Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.


// Problem 2
function mergeObjects(obj1, obj2) {
    let merged = {...obj1, ...obj2};
    return merged;
  }
  
  let obj1 = {a: 1, b: 2};
  let obj2 = {b: 3, c: 4};
  console.log(mergeObjects(obj1, obj2)); // Output: {a: 1, b: 3, c: 4}
  
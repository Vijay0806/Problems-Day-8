// 5. Implement a function to flatten a nested JSON object, i.e., convert it into a flat JSON object where each key is 
// a dot-separated path to a leaf node in the original object.


function flattenObject(obj, parentKey = '') {
    let flattened = {};
    
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        let nestedKeys = flattenObject(obj[key], `${parentKey}${key}.`);
        flattened = {...flattened, ...nestedKeys};
      } else {
        flattened[`${parentKey}${key}`] = obj[key];
      }
    }
    
    return flattened;
  }
  
  let nestedObj = {
    name: "Vijay",
    age: 23,
    address: {
      street: "123 Main St",
      city: "Dharmapuri",
      country: "India"
    },
    contacts: {
      email: "vijay@gmail.com",
      phone: {
        home: "123-456-7890",
        mobile: "9876543210"
      }
    }
  };
  
  let flattenedObj = flattenObject(nestedObj);
  console.log(flattenedObj);
  
// 4. Write a function that takes a JSON object and a path (string representing the path to a property in the object, e.g.,
//  "person.address.city") and returns the value at that path in the object. Handle
// cases where the path is invalid.
function getValueByPath(obj, path) {
    let properties = path.split('.');
    let value = obj;
    
    for (let prop of properties) {
      if (value[prop] !== undefined) {
        value = value[prop];
      } else {
        return undefined; // Invalid path
      }
    }
    
    return value;
  }
  
  let person = {
    name: "Vijay",
    age: 23,
    address: {
      street: "123 Main St",
      city: "Dharmapuri",
      state: "Tamil Nadu",
      pin: "612345"
    }
  };
  
  console.log(getValueByPath(person, "name")); // Output: Vijay
  console.log(getValueByPath(person, "address.city")); // Output:Dharmapuri 
  console.log(getValueByPath(person, "address.pin")); // Output: 612345
  console.log(getValueByPath(person, "address.country")); // Output: undefined (Invalid path)
  
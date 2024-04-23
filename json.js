// Session 8: Objects (JSON Objects)

// Topics: Creating and manipulating JSON objects

// Problems:

// 1. Create a JSON object representing a person with properties like name, age, and address. Add methods to the object to calculate the person's birth year and full address.


// Problem 1
let person = {
    name: "Vijay",
    age: 23,
    address: {
      street: "123 Main St",
      city: "Dharmapuri",
      state: "TamilNadu",
      pin: "612345"
    },
    birthYear() {
      return new Date().getFullYear() - this.age;
    },
    fullAddress() {
      return `${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.pin}`;
    }
  };
  
  console.log(person.birthYear()); // Output: 2001
  console.log(person.fullAddress()); // Output: 123 Main St, Dharmapuri, TamilNadu, 612345
  
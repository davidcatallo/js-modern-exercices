// 1. Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2;
console.log(half(stats));

// 2. Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = arr.map(items=> `<li class="text-warning">${items}</li>`);
  return failureItems;
}

const failuresList = makeList(result.failure);

// 3. Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {

  return {
    name,
    age,
    gender
  };

};

// 4. Write Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// 5. Use class Syntax to Define a Constructor Function

class Vegetable {
  constructor (name) {
    this.name=name;
  }
};

const carrot = new Vegetable('carrot');

// 6. Use getters and setters to Control Access to an Object

class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5 / 9 * (this._fahrenheit - 32);
  }
  set temperature(c) {
    return this._fahrenheit = c * 9.0 / 5 + 32;
  }
}  

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature;

// 7. Create a Module Script

<html>
  <body>

    <script type="module" src="index.js"></script>
  
  </body>
</html>

// 8. Use export to Share a Code Block

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

// 9. Reuse JavaScript Code Using import

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// 10. Use * to Import Everything from a File

import * as stringFunctions from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 11. exported from a file. It is also used to create a fallback value for a file or module.

export default function subtract(x, y) {
  return x - y;
}

// 12. Import a Default Export

  import subtract from "./math_functions.js";

subtract(7,4);

// 13. Create a JavaScript Promise

const makeServerRequest = new Promise((resolve, reject) => {

})

// 14. Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// 15. Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
  promise.makeServerRequest.then(result)
  console.log(result)
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// 16. Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  
  makeServerRequest.catch(error => {
    console.log(error);
});

  let responseFromServer = false; 

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
  
});

makeServerRequest.then(result => {
  console.log(result);
});
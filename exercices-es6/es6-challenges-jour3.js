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


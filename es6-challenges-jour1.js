// 1. Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// 2. Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Ne change pas la ligne suivante
  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// 3. Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    E: 2.71828,
    PI: 3.14159,
    MAX_SAFE_INTEGER: 9007199254740991
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 23;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 4. Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

// 5. Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// 6. Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

// 7. Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

// 8. Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 

arr2 = [...arr1];  // Change this line

console.log(arr2);
/*
 * Student functions ­– implement each one.
 * Do NOT change the exported names or remove the TODO comments.
 */

/**
 * Type definition for syntax check
 * @typedef {Object} SyntaxCheck
 * @property {number} myNumber
 * @property {string} myString
 * @property {Array} myArray
 * @property {Object} myObject
 */

/**
 * Create some basic variables
 * @returns {SyntaxCheck}
 */

function createVariables() {
  // TODO: Create a variable named 'myNumber', initialize it with the 'const' keyword and assign a number to it

  //  TODO: Create 'myString' and assign a string to it

  //  TODO: Create 'myArray', put an Array into it and fill that with some data

  //  TODO: Create 'myObject' and assign some object literal to it
  return { myNumber, myString, myArray, myObject };
}

/**
 * A function that implements division
 * @param {number} a
 * @param {number} b
 * @returns {number|"Division by Zero"}
 */
function divide(a, b) {
  // TODO: Create a function that returns the quotient of a and b;
  // TODO: use try-catch to handle zeroes - Catch the error and return "Division by Zero"
  return 'NOT IMPLEMENTED';
}

/**
 *
 * @param {any} input
 * @property {"boolean"| "string" | "number" | "object" | "undefined"} Typeof
 * @returns {Typeof}
 */
function checkType(input) {
  return 'NOT IMPLEMENTED';
}

/**
 * Checks if body height is above minimum requirements of *122cm* to go for a jolly ride.
 * @param {number} bodyHeight body height in cm
 * @returns {boolean}
 */
function canRideBigRollerCoaster(bodyHeight) {
  // TODO: Use comparison to check if requirements are met.
  // TODO: Make sure that 'bodyHeight' is a number, otherwise return undefined

  return 'NOT IMPLEMENTED';
}

/**
 * Performs a basic arithmetic calculation between two numbers.
 *
 * @typedef {"+" | "-" | "*" | "/"} Operator - The supported arithmetic operators.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @param {Operator} operator The arithmetic operator to use.
 * @returns {number} The result of the calculation, or undefined if the operator is not allowed or division by zero occurs.
 */
function calculate(a, b, operator) {
  // TODO: Use if/else or switch to check for the arithmetic operation and return the result
  // TODO: In case of a not allowed operator return undefined

  return 'NOT IMPLEMENTED';
}

/**
 * Function that takes any array and logs only Ice Cream to the console
 * @param {Array<any>} someArrayOfStuff  Array with numbers, Objects, bools and some Strings
 */
function logIceCreamOrders(someArrayOfStuff) {
  // TODO: Use a loop to log only the Ice Cream Orders (strings) in 'someArrayOfStuff' to the console
  return 'NOT IMPLEMENTED';
}

/**
 * Counts the occurrences of different data types within an array.
 *
 * @param {Array<any>} arr - The input array containing various elements.
 * @returns {Array<number>} An array of numbers representing the counts of different types in the following order:
 * [countNum, countStr, countArr, countObj, countBool].
 * - Index 0: Count of Numbers
 * - Index 1: Count of Strings
 * - Index 2: Count of Arrays
 * - Index 3: Count of Objects
 * - Index 4: Count of Booleans
 */
function countTypes(arr) {
  // TODO: Loop  over the Array 'arr', count all Numbers, Strings, Objects and so on and return the total of each type in one array in the right order ([CountNum, CountStr, CountArr, CountObj, CountBool])
  // return 'NOT IMPLEMENTED';
  let countNum = 0;
  let countStr = 0;
  let countArr = 0;
  let countObj = 0;
  let countBool = 0;
  for (const thing of arr) {
    if (Array.isArray(thing)) {
      countArr++;
      continue;
    }
    switch (typeof thing) {
      case 'number':
        countNum++;
        break;
      case 'string':
        countStr++;
        break;
      case 'object':
        countObj++;
        break;
      case 'boolean':
        countBool++;
        break;
    }
  }
  return [countNum, countStr, countArr, countObj, countBool];
}

/**
 * Stuff for tests
 */
// const myNumber = 42.0000000000024;
const myNumber = 'You should';
const myString = ' create some variables';
const myArray = [myNumber, myString, new Date()];
const myObject = { myArray };
export {
  createVariables,
  divide,
  canRideBigRollerCoaster,
  calculate,
  logIceCreamOrders,
  countTypes,
  myArray,
  myNumber,
  myObject,
  myString,
};

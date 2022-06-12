'use strict';

// We use let to declare a variable when we know ahead of time when its value can be changed through the process.
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstname = "Timera";
console.log(firstname);

firstname = "Gassama";
console.log(firstname);

// The standard naming of js variables is camelCase.
let lastName = "Mamadou";

// variable names cannot start with numbers, but with _, letters or $
let profession = "Teacher";
let $function = "Recruiter";

// Constant are declared with uppercase naming convention
const PI = 3.1415;
console.log(PI);

// Javascript Data Types are either Objects or Primitive

// It has & Primitive data types
let currentAge = 23;
console.log(typeof(currentAge));
let bestFruit = "Banana";
console.log(typeof(bestFruit));
let teenager = true;
console.log(typeof(teenager));
let friend;
console.log(typeof(friend));
let address = "";
console.log(typeof(address));

let favoriteMeal = "Mafe";

const bithYear = 1993;

// Var declaration: old way of declaring a variable before ES6
// let is blocks code, while var is function code 
var job = "programmer";

////////////// OPERATORS ///////////////////
// Allows to combine values
// Assignment Operators
const now = 2037;
const sarahAge = now - 2001;
const myAge = now - bithYear;
console.log(myAge, sarahAge);

console.log(myAge*2, sarahAge/2, 2**3);
console.log(myAge, ' years old; ', sarahAge+ ' years old.');

// Maths Operators
let x = 10 + 5; // x = 10 + 5
console.log(x);
x += 10; // x + 10 => 15 + 10 = 25
console.log(x);
x *= 4; // 25 * 4 = 100
console.log(x);
x++; // x + 1 = 101
console.log(x);
x--; // x - 1 = 100
console.log(x);

// Comparison Operators
console.log(myAge > sarahAge);
console.log(sarahAge >= 18);

const isFullAge = sarahAge >= 40;
console.log(isFullAge)

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

const birthYear = 1993;

// Var declaration: old way of declaring a variable before ES6
// let is blocks code, while var is function code 
var job = "programmer";

////////////// OPERATORS ///////////////////
// Allows to combine values
// Assignment Operators
const now = 2022;
const sarahAge = now - 2001;
const myAge = now - birthYear;
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

const isFullAge = sarahAge >= 22;
console.log(isFullAge);


///////////////// OPERATORS PRECEDENCE  ////////////////////////
// Refer to MDN Operator Precedence
let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const avgAge = ((myAge + sarahAge) / 2);
console.log(avgAge);

////////// CHALLENGE #1 ///////////////
// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;
const markHeight = 95;
const markWeight = 1.88;
const johnHeight = 85;
const johnWeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);


////////////// STRING ///////////////////
firstname = "Mamadou";
lastName = "TIMERA";
profession = "Student"
console.log(`My name is ${lastName} ${firstname}, and I am ${2022 - birthYear} years old. I am a ${profession} at CQUPT.`);

console.log(firstname[0]);


///////////// IF STATEMENTS /////////////////////
if (sarahAge >= 18) {
    console.log(`Sarah can start driving license.`);
} else {
    console.log(`Sarah is too young.`);
}

let century;
if (birthYear <= 2000) { 
    century = 20;
} else {
    century = 21;
}
console.log(century);

////////////// CHALLENGE #2 ////////////////////
if (markBMI > johnBMI) {
    console.log(`mark's (${markBMI}) BMI is higher than John's (${johnBMI})`);
} else {
    console.log(`John's (${johnBMI}) BMI is higher than mark's (${markBMI})`);
}


///////////////// TYPE CONVERSION AND COERCION ////////////////
// JavaScript only converts to 3 types: Number, String and Boolean

// Type conversion
const inputYear = '1993';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('TIMERA'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' year old.');
console.log('23' - '10' - 3 ); // string are converted to numbers = 10
console.log('23' / '2'); // string are converted to numbers = 11.5
console.log('23' * '2' ); // string are converted to numbers = 46
console.log('23' + '10' + 3 ); // no coversion in this case = 23103

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n); // 10


//////////// TRUTHY AND FALSY VALUES ////////////////////////
// % falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('TIMERA'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all!`);
}
else {
    console.log(`You should get a job!`);
}

let height;
if(height) {
    console.log('Yay!  Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


////////////////// EQUALITY OPERATORS ////////////////////////

const age = '18';
if(age === 18) { // === Strict equal operator, doesn't perform type coercion.
    console.log('You just became an adult :D (strict)');
}

if(age == 18) { // === Strict equal operator, doesn't perform type coercion.
    console.log('You just became an adult :D (loose)');
}

/*
const favNumber = Number(prompt("What's your favourite number ?"));
console.log(typeof favNumber, favNumber);

if(favNumber == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!');
}

if(favNumber === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number! (strict)');
} else if(favNumber === 6) {
    console.log('Cool! 6 is also an amazing number! (strict)');
} else {
    console.log('Number is not 23 or 6.');
}
*/

////////////// BOOLEAN LOGIC: AND, OR, NOT OPERATORS /////////////////
// if(favNumber != 23 || favNumber !=6) {
//     console.log('Why not 23 or 6?');
// }

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive!');
}

//////////////// CHALLENGE #3 ///////////////////
const scoreDolphins = (96 + 108 + 99) / 3; // 96, 112, 101
const scoreKoalas = (88 + 91 + 110) / 3; // 109, 95, 123
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the Trophy.`);
} else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas win the Trophy.`);
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the Trophy.`);
} else {
    console.log('No one wins the Trophy.')
}


//////////////// SWITCH STATEMENTS //////////////////
const day = "Monday";

switch(day) {
    case 'Monday': 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday': 
        console.log('Prepare theory videos');
        break;
    case 'Wednesday': 
    case 'Thursday': 
        console.log('Write code examples');
        break;
    case 'Friday': 
        console.log('record videos');
        break;
    case 'Saturday': 
    case 'Sunday':
        console.log('Enjoy weekends :D');
        break;
    default:
        console.log('Not a valid day!');
}










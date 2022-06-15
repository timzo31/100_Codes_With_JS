'use strict';

// arrays declarations
const friends = ['Timera', 'Niouma', 'Abdoulaye', 'Rama'];
const years = new Array(1993, 1998, 2001, 2005);
console.log(friends[0]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = "Clara";

const timera = ['Timera', 'Mamadou', 28, false, friends];
console.log(timera);

const birthYear = 1993;
const clacAge = () => 2023 - birthYear;

console.log(clacAge(birthYear));

const age1 = clacAge(years[0]);
console.log(age1);

friends.push('Faoumata'); // Add at the end of an array
console.log(friends);
friends.unshift('Albert'); // Add an element at the beginning of the array
console.log(friends);

// Remove Elements
friends.pop(); // Remove the lat element of an array
console.log(friends);
friends.shift(); // Remove the first element of an array
console.log(friends);

// Add an element at an index
friends.indexOf('Abdoulaye');
friends.indexOf('Timera');

// Find an element
friends.push(23)
friends.includes('Timera'); // check if the array contains the word and return a boolean
friends.includes(23);


////////////////// CODING CHALLENGE #1 ARRAYS ////////////////////

const bills = [125, 555, 44];


const calcTip = (billVal) => billVal >= 50 && billVal<= 300 ? billVal * .15 : billVal * .2;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

////////////////////// ITERATION /////////////////////////

// for loop keeps running while the condition is TRUE. 
for(let rep=1; rep <= 10; rep ++) {
    console.log(`lifting weights repetition ${rep}`);
}

// Looping arrays, Breaking and Continuing
const timeraArr = [
    "Mamadou",
    "timera",
    2023 - 1993,
    "Student",
    ["Niouma", "Moatassim", "Solo", "Diallo", "Youssef"],
    true
];

let types = [];

for(let i=0; i < timeraArr.length; i ++) {
    // Reading from timeraArr array
    console.log(timeraArr[i]);

    // Filling from timeraArr array
    //types[i] = typeof timeraArr[i];
    types.push(typeof timeraArr[i]);
}
console.log(types);

const yearsArr = [1991, 1993, 2001, 2004];
const ages = [];

for(let i=0; i < years.length; i ++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// Continue and break
console.log("----------- ONLY STRINGS ------------")
for(let i=0; i < timeraArr.length; i ++) {
    if (typeof timeraArr[i] !== 'string')
        continue;
        
   console.log(timeraArr[i], typeof timeraArr[i]);
}

console.log("----------- BREAK WITH NUMBER ------------")
for(let i=0; i < timeraArr.length; i ++) {
    if (typeof timeraArr[i] !== 'string')
        continue;
        
   console.log(timeraArr[i], typeof timeraArr[i]);
}



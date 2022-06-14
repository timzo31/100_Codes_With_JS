'use strict';


////////////////// OBJECTS ////////////////////
const timFriends = ["Niouma", "Moatassim", "Solo", "Diallo", "Youssef"]; 

const timera = {
    firstName: "Mamadou",
    lastName: "TIMERA",
    age: 28,
    profession: "Student",
    friends: timFriends,
};

console.log(timera.lastName); // access the lastname using dot notation
console.log(timera['firstName']); // access the firstname using bracket notation: usually to get the value by property name

const namekey = "Name";
console.log(timera['last' + namekey]);
console.log(timera['first' + namekey]);

const interestedIn = prompt('What do you want to know about Timera ? Choose between firstName, lastName, age, friends and profession');

if(timera[interestedIn]) {
    console.log(timera[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, friends and profession.");
}

timera['email'] = "tims30@gmail.com";
timera['location'] = "China";
console.log(timera);

console.log(`${timera.lastName} has ${timera['friends'].length}, and his best friend is called ${timera['friends'][0]}.`);

console.log(`${timera.lastName} has ${timera.friends.length}, and his best friend is called ${timera.friends[0]}.`);







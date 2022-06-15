'use strict';


////////////////// OBJECTS ////////////////////
const timFriends = ["Niouma", "Moatassim", "Solo", "Diallo", "Youssef"]; 

const timera = {
    firstName: "Mamadou",
    lastName: "TIMERA",
    birthYear: 1993,
    profession: "Student",
    friends: timFriends,
    hasDriverLicense: true,

    // Needs a function expression to work
    // calcAge: function() {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        console.log(`${this.lastName} is a ${this.calcAge()} year old ${this.profession}, and he ${this.hasDriverLicense ? 'has ' : 'does not have '} a driver license.`);

    }
};

console.log(timera.lastName); // access the lastname using dot notation
console.log(timera['firstName']); // access the firstname using bracket notation: usually to get the value by property name

const namekey = "Name";
console.log(timera['last' + namekey]);
console.log(timera['first' + namekey]);

/*const interestedIn = prompt('What do you want to know about Timera ? Choose between firstName, lastName, age, friends and profession');

if(timera[interestedIn]) {
    console.log(timera[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, friends and profession.");
}
*/
timera['email'] = "tims30@gmail.com";
timera['location'] = "China";
console.log(timera);

console.log(`${timera.lastName} has ${timera['friends'].length}, and his best friend is called ${timera['friends'][0]}.`);

console.log(`${timera.lastName} has ${timera.friends.length}, and his best friend is called ${timera.friends[0]}.`);

console.log(timera.calcAge());
//console.log(timera['calcAge'](1993));

console.log(timera.age);
console.log(timera.age);
console.log(timera.age);

// Challenge
console.log(timera.getSummary());

////////////// CODING CHALLENGE #1 /////////////////////
const john = {
    firstName: "John",
    lastName: "Smith",
    height: 1.95,
    weight: 92,

    calcBMI: function() {
        this.bmi = this.weight / (this.height**2);
        return this.bmi;
    }
}

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    height: 1.69,
    weight: 78,

    calcBMI: function() {
        this.bmi = this.weight / (this.height**2);
        return this.bmi;
    }
}

console.log(`${(john.calcBMI() > mark.calcBMI()) ? `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s BMI (${mark.calcBMI()}).` : `${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s BMI (${john.calcBMI()}).`}`);


///////////////////// CODING CHALLENGE #2: OBJECTS&ARRAYS///////////////////////////
const bills = [50, 105, 120, 350, 500, 300, 450, 230, 48, 555];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
} 


for (let i = 0; i < bills.length; i ++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    //tips.push(calcTip(bills[i]));
    totals = tip + bills[i];
}
console.log(bills, tips, totals);


const calcAverage = function(arr) {
    let sum = 0
    
    for(let i = 0; i < arr.length; i ++) {
        sum = sum + arr[i];
        //sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
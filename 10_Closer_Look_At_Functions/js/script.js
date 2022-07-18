"use strict";
/*
const bookings = [];

const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	// ES5 way of setting default values to parameters
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 900);
createBooking("LH123", 3);
createBooking("LH123", 4);

createBooking("LH123", undefined, 1000);
*/
/*
const flight = "LH123";
const timera = {
	name: "TIMERA Mamadou",
	passport: 2034256745,
};

const checkIn = function (flightNum, passenger) {
	flightNum = "LH123";
	passenger.name = "Mr." + passenger.name;

	if (passenger.passport === 2034256745) {
		//alert("Checked in");
	} else {
		//alert("wrong passport");
	}
};

// checkIn(flight, timera);
// console.log(flight);
// console.log(timera);

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(timera);
console.log(timera);
checkIn(flight, timera);

////////////////////////////////////////
/////// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ///////

const oneWorld = function (str) {
	return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...others] = str.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Tansformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("Javascript is the best ! ", oneWorld);

// JS uses callback all the time
const high5 = function () {
	console.log("Hi");
};
document.body.addEventListener("click", high5);
["Mamadou", "Daouda", "Ismaila"].forEach(high5);

////////////////////////////////////////
///// FUNCTION RETURNING FUNCTIONS /////

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

const greeterHey = greet("Hey");
greeterHey("TIMERA");
greeterHey("Steven");

greet("Hello")("Timera");
const greetArr = (greeting) => (name) => {
	console.log(`${greeting} ${name}`);
};

greetArr("Salut")("Mamadou");

///////////////////////////////////////
///// THE CALL AND APPLY METHODS /////

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	// book: function(){}
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, "TIMERA Mamadou");
lufthansa.book(653, "TIMERA Niouma");

const eurowings = {
	airline: "eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;

// Does not work
//book(23, "Sarah Williams");

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 240, "Armand Traore");
console.log(lufthansa);

const swiss = {
	airline: "Swiss Air Lines",
	iataCode: "LX",
	bookings: [],
};

book.call(swiss, 583, "Mary Couper");
//console.log(swiss);

// Apply Method
const flightData = [586, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

///////////////////////////////////////
/////////// BIND METHOD ///////////////
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Almamy SIDIBE");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("TIMERA Mamadou");
bookEW23("Jonas Schmedtann");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

// lufthansa.buyPlane();

document
	.querySelector(".buy")
	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

///////// PARTIAL APPLICATION //////////
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/

///////////////////////////////////////
//////// CODING CHALLENGE N°1 /////////
const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0,0,0,0]. More in the next section.
	answers: new Array(4).fill(0),

	registerNewAnswer() {
		// Get the answer
		const answer = Number(
			prompt(`${this.question}\n${this.options.join("\n")}
    \n(Write option number)`)
		);
		console.log(answer);

		// Register the answer
		typeof answer === "number" &&
			answer < this.options.length &&
			this.answers[answer]++;

		//console.log(this.answers);
		this.displayResults();
		this.displayResults("string");
	},

	displayResults(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			// Poll results are 13, 2, 4, &
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};
// poll.registerNewAnswer();

document
	.querySelector(".poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

///////////////////////////////////////
/////////////     IIFE      ///////////

const runOnce = function () {
	console.log("This will never run again");
};

runOnce();

(function () {
	console.log("This will never run again");
	const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log("This will never run again"))();

////////////////////////////////////////
////////////     CLOSURES     //////////

const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(`${passengerCount} passengers`);
	};
};

const booker = secureBooking();

booker();
booker();
booker();

///////////////////////////////////////
///////   MORE CLOSURE EXAMPLES   /////
// Example 1
let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	};
};

g();
f();
console.dir(f);

// re-asigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
	const perGroup = n / 3;

	setTimeout(function () {
		console.log(`We are now boarding all ${n}`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);

	console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
// setTimeout(function () {
// 	console.log("TIMER");
// }, 1000);

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

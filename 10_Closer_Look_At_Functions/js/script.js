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

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
		alert("Checked in");
	} else {
		alert("wrong passport");
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

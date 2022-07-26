"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	//openingHours: openingHours,
	// Enhanced ES6 object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// restaurant.orderDelivery({
// 	time: "22:30",
// 	address: "Via del Solde, 21",
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// restaurant.orderDelivery({
// 	address: "Via del Sole, 21",
// 	starterIndex: 1,
// });

////////////////////////////////////////////////////////
/////         WORKING WITH STRINGS: PART 1         /////
////////////////////////////////////////////////////////
/*
const airline = "Air Senegal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("e"));
console.log(airline.indexOf("Senegal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 8));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ")));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
	// B & E are middle seats
	const s = seat.slice(-1);
	if (s === "B" || s === "E") console.log("You got the middle seat !!");
	else console.log("You got lucky!");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Timera"));
console.log(typeof new String("Jonas"));

console.log(typeof new String("Jonas").slice(1));
*/

////////////////////////////////////////////////////////
/////         WORKING WITH STRINGS: PART 2         /////
////////////////////////////////////////////////////////

const airline = "TAP air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "TiMerA";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passenger.slice(1);

console.log(passengerCorrect);

// Comparing emails
const email = "hello@gmail.com";
const loginEmail = " Hello@gmail.com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Using Regular Expressions
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
	console.log("Part of the NEW Airbus family");
}

const checkBaggage = function (items) {
	const baggage = items.toLowerCase();
	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You're not allowed on BeforeUnloadEvent.");
	} else {
		console.log("Welcome on board!");
	}
};

checkBaggage("I have a laptop, some Food and pocket Knife");
checkBaggage("Shocks and camera");
checkBaggage("Got some snacks and a gun for protection.");

////////////////////////////////////////////////////////
/////             MAPS FUNDAMENTALS                /////
////////////////////////////////////////////////////////
/*
const rest = new Map();
rest.set("name", "El Classico");
rest.set(1, "Firenzo, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
	.set("open", 11)
	.set("close", 23)
	.set(true, "We are open :D")
	.set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time > rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
//console.log(rest.clear);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr, "Test"));
*/

////////////////////////////////////////////////////////
/////                MAPS ITERATION                /////
////////////////////////////////////////////////////////
/*
const question = new Map([
	["question", "What is the best programming language in the world?"],
	[1, "C"],
	[2, "Java"],
	[3, "JavaScript"],
	["correct", 3],
	[true, "Correct :)"],
	[false, "Try again!"],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
	if (typeof key === "number") console.log(`answer ${key}:  ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert Map to Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
////////////////////////////////////////////////////////
/////                    SETS                      /////
////////////////////////////////////////////////////////
/*
const orderSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
]);
console.log(orderSet);

console.log(new Set("Timera"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
	console.log(order);
}

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = new Set(staff);
// packing
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]));

console.log(new Set("TIMERA Mamadou").size);
*/
////////////////////////////////////////////////////////
/// LOOPING OBJECTS: Object Keys, Values and Entries ///
////////////////////////////////////////////////////////
/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
	openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Property ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
////////////////////////////////////////////////////////
////////////      OPTIONAL CHAINING (?.)    ////////////
////////////////////////////////////////////////////////
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
	console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? "closed";
	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
	{
		name: "Timera",
		email: "madty31@timdev.com",
	},
];

console.log(users[0]?.name ?? "User array empty");
*/
////////////////////////////////////////////////////////
/////////// LOOPING ARRAYS:The For-Of Loop   ///////////
////////////////////////////////////////////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
	console.log(item);
}

for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);
*/
////////////////////////////////////////////////////////
///////////       CODING CHALLENGE N°1       ///////////
////////////////////////////////////////////////////////
/*
const game = {
	team1: "Barcelona",
	team2: "Real Madrid",
	players: [
		[
			"Stergen",
			"Pique",
			"christensen",
			"Alba",
			"Araujo",
			"Busquets",
			"Pedri",
			"Gavi",
			"Rafinha",
			"Fati",
			"Lewandowski",
		],
		[
			"Courtois",
			"Militao",
			"Alaba",
			"Mendy",
			"Vasquez",
			"Kroos",
			"Modric",
			"Valverde",
			"Rodrigo",
			"Camavinga",
			"Benzema",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Fati", "Rafinha", "Lewandowski"],
	date: "Jul 24th, 2022",
	odds: {
		team1: 6.5,
		x: 3.25,
		team2: 1.33,
	},
};

// 1)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, "Dembele", "Feran", "Kessie"];

// 5)
const {
	odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
	console.log(`${players.length} goals scored`);
};

// printGoals("Lewandowski", "Fati", "Rafinha", "Lewandowski");
// printGoals("Benzema", "Modric", "Aubameyang", "Pedri", "Busquets");
printGoals(...game.scored);

// 7)
team1 < team2 && console.log("Team 2 is more likely to win");

team1 > team2 && console.log("Team 1 is more likely to win");
*/

////////////////////////////////////////////////////////
///////            CODING CHALLENGE N°3           //////
////////////////////////////////////////////////////////
/*
const gameEvents = new Map([
	[17, "GOAL"],
	[36, "Substitution"],
	[47, "GOAL"],
	[61, "Substitution"],
	[64, "Yellow card"],
	[69, "Red card"],
	[70, "Substitution"],
	[72, "Substitution"],
	[76, "GOAL"],
	[80, "GOAL"],
	[92, "Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(
	`An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? "FIRST" : "SECOND";
	console.log(`${half} [HALF] ${min}: ${event}`);
}
*/
////////////////////////////////////////////////////////
///////            CODING CHALLENGE N°2           //////
////////////////////////////////////////////////////////
/*
// 1.
// const scorers = [...game.scored];
for (const [i, player] of game.scored.entries()) {
	console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
	average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
	const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
	console.log(`Odd of ${teamStr} ${odd}`);
}
*/
////////////////////////////////////////////////////////
///////////    LOGICAL ASSIGNMENT OPERATORS  ///////////
////////////////////////////////////////////////////////
/*
const rest1 = {
	name: "Capri",
	numGuests: 20,
	numGuests: 0,
};

const rest2 = {
	name: "Capri",
	owner: "Giovani Travis",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";

rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);
*/
////////////////////////////////////////////////////////
///////////  THE NU LLISH COALESCING OPERATORS  /////////
////////////////////////////////////////////////////////
/*
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
////////////////////////////////////////////////////////
////////////   SHORT CIRCUITING (&& AND ||)  ///////////
////////////////////////////////////////////////////////
/*
console.log("--------- OR ----------");
// Use ANY data type, return ANY data type, Short-circuiting
console.log(3 || "TIMERA");
console.log("" || "TIMERA");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

restaurant.numGuests = 0;

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("--------- AND ----------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Jonas" && true);

console.log("Hello" && 23 && null && "Jonas");

if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

////////////////////////////////////////////////////////
////////////    REST PATTERN & PARAMETERS    ///////////
///////////////    PACKING ARRAYS     //////////////////
/*
// SPREAD, because of RIGHT hand side =
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others);

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
};

add(2, 3);
add(5, 4, 6, 6);
add(1, 4, 6, 23, 45, 5, 9, 10);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

restaurant.orderPizza("mushrooms");
*/

////////////////////////////////////////////////////////
////////////    THE SPREAD OPERATORS    ////////////////
///////////////    UNPACK ARRAY     ///////////////////

// unpacking all the array elements at once
/*
const arr = [7, 8, 10];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

for (const [...menuItem] of newMenu) {
	console.log(...newMenu);
}

// Copy array
const mainMenuCop = [...restaurant.mainMenu];

// copy arrays
const mainMenuCopy = Object.entries(restaurant.mainMenu);
console.log(mainMenuCopy);
for (const [key, menuItem] of mainMenuCopy) {
	console.log(`Menu n° ${Number(key) + 1}: ${menuItem}`);
}

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Timera";
const letters = [...str, " ", "S."];
console.log(letters);

/*const ingredients = [
	prompt(`Let's make pasta!\n Ingredient 1?`),
	prompt(`ingredient 2? `),
	prompt(`Ingredient 3? `),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients); ///*

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "TIMERA" };
console.log(newRestaurant);

const restaurantCopy2 = { ...restaurant };
restaurantCopy2.name = "Timera Ristorente";
console.log(restaurantCopy2);
*/

////////////////////////////////////////////////////////
////////////    DESTRUCTURING OBJECTS    ///////////////
////////////////////////////////////////////////////////
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating varibles
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
////////////////////////////////////////////////////////
////////////    DESTRUCTURING ARRAYS    ////////////////
////////////////////////////////////////////////////////
/*
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Array Destructuring uses alway const declaration
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, , second] = restaurant.categories;
console.log(first, second);
const [cat, ...others] = restaurant.categories;
console.log([cat, ...others]);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Switching (Re-assigning) using array destructuring
[first, second] = [second, first];
console.log(first, second);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

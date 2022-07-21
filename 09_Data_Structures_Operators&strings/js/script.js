"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = "20:00",
		address,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

restaurant.orderDelivery({
	time: "22:30",
	address: "Via del Solde, 21",
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: "Via del Sole, 21",
	starterIndex: 1,
});

////////////////////////////////////////////////////////
///////////  THE NULLISH COALESCING OPERATORS  /////////
////////////////////////////////////////////////////////

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

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

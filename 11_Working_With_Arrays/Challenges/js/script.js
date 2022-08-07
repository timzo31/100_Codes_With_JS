'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// WORKING WITH ARRAYS

//////////////////////////////////////////////////////
/////////// CHALLLENGE N°1 ////////////////
//////////////////////////////////////////////////////

const juliaData = [3, 5, 2, 12, 7];
const kateData = [10, 5, 6, 1, 4];

const checkDogs = function (data1, data2) {
  const dogsJuliaCorrected = data1.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);

  const dogs = dogsJuliaCorrected.concat(data2);
  //console.log(dogs);

  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is an an adult , and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs(juliaData, kateData);

//////////////////////////////////////////////////////
///////////      CHALLENGE N°2        ////////////////
//////////////////////////////////////////////////////

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // const average2 = adults.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );

  return average;
};

const avg1 = calcAverageHumanAge(dogs1);
const avg2 = calcAverageHumanAge(dogs2);
console.log(avg1, avg2);

//////////////////////////////////////////////////////
///////////      CHALLENGE N°3        ////////////////
//////////////////////////////////////////////////////

const calcAverageHumanAgeChain = ages =>
  ages
    .map(age => (age < 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avgChain1 = calcAverageHumanAgeChain(dogs1);
console.log(avgChain1);

/////////////////////////////////////////////
///////////    CHALLENGE N°4   //////////////
////////////////////////////////////////////

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'Much' : 'Little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// 4.
//"Matilda and Alice and Bob's dogs eat too much!";
//"Sarah and John and Michael's dogs eat too little!";

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.cur === dog.recFood));

// 6.
// current > (recommandedFood * .9) && current < (recommanded * 1.1)

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 6.
console.log(dogs.filter(checkEatingOkay));

// 8. Sort it by recommanded food portion in an ascending order
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

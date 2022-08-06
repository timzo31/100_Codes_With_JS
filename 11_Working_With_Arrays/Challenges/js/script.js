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

const dogs = [5, 2, 4, 1, 15, 8, 3];
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

const avg1 = calcAverageHumanAge(dogs);
const avg2 = calcAverageHumanAge(dogs2);
console.log(avg1, avg2);

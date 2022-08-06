'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////
///////////       BANKIST APP         ////////////////
//////////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
createUsernames(accounts);

//console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2, 4));
console.log(arr.slice(2, -1));
console.log(arr.slice(-1));
console.log([...arr]);

// SPLICE
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
//*/

/*
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // Getting the last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // At with Strings
// console.log('Timera'.at(3));
*/
//////////////////////////////////////////////////////
///////////// LOOPING ARRAYS: FOREACH ////////////////
//////////////////////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('-------- FOR OF ----------');
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Mouvement n°${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Mouvement n°${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

console.log('--------- FOREACH ----------');
movements.forEach((mov, i) => {
  console.log(
    `${i + 1} => ${Math.abs(mov)} is a ${mov > 0 ? 'Deposit' : 'Withdrawal'}`
  );
});

movements.forEach(function (mov) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});
*/
//////////////////////////////////////////////////////
/////////// FOREACH WITH MAPS ET SETS ////////////////
//////////////////////////////////////////////////////
/*
console.log(`---------- FOREACH with Maps and Sets ------------`);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//////////////////////////////////////////////////////
/////////// CHALLLENGE N°1 ////////////////
//////////////////////////////////////////////////////
/*
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
*/

//////////////////////////////////////////////////////
/////////// THE MAP METHOD ////////////////
//////////////////////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });
const movementsUSD = movements.map(mov => mov * euroToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUSD);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You deposit ${
      mov > 0 ? 'Deposit' : 'Withdrew'
    } ${Math.abs(mov)}`
);
/* if (mov > 0) {
  //   return `Movement ${i + 1}: You deposit ${mov}`;
  // } else {
  //   return `Mouvement ${i + 1}: You withdrew ${Math.abs(mov)}`;
   }
//});///*
console.log(movementsDescriptions);
*/
//////////////////////////////////////////////////////
/////////// COMPUTING USERNAMES ////////////////
//////////////////////////////////////////////////////
/*
const user1 = 'Timera Mamadou';

const createUsernames = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};

createUsernames(accounts);
console.log(accounts);
*/
//////////////////////////////////////////////////////
/////////// THE FILTER METHOD ////////////////
//////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Filter Method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// With For loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// Array of withdrawals with arrow filter function
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//////////////////////////////////////////////////////
/////////// THE REDUCE METHOD ////////////////
//////////////////////////////////////////////////////

// accumulator => SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// Balance Using the reduce method with arrow function
const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArr);

// Balance with a For Loop
// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// Maximum value with REDUCE METHOD
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

// Max valu with Arrow REDUCE Method
const max2 = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
console.log(max2);

//////////////////////////////////////////////////////
/////////// THE MAGIC OF CHAINING METHOD /////////////
//////////////////////////////////////////////////////

const euroToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * euroToUSD);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * euroToUsd)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, cur) => acc + cur, 0);

console.log(Math.trunc(totalDepositsUSD));

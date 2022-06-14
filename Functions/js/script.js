'use strict';


////////////////// CODE CHALLENGE #1 ////////////////////
// A team has to have double the average of it oponent to win the competition.

//  const avgDolphins = (44 + 23 + 71) / 3;
//  const avgKoalas = (65 + 54 + 49) / 3;

function checkWinner(avg1, avg2) {
    if(avg1 >= 2 * avg2) {
        console.log(`Dolphins win (${avg1} vs. ${avg2})`);
    } else if(2 * avg1 <= avg2) {
        console.log(`Koalas win (${avg2} vs. ${avg1})`);
    } else {
        console.log(`No team wins (${avg2} vs. ${avg1}).`);
    }
}

const calcAverge = (score1, score2, score3) => (score1+score2+score3) / 3;

let avgDolphins = calcAverge(44,23,71);
let avgKoalas = calcAverge(65,54,49);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverge(85, 54, 41);
avgKoalas = calcAverge(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);





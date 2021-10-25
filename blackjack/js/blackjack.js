/*let firstCard = Math.round(Math.random() * (11 - 2) + 2);
let secondCard = Math.round(Math.random() * (11 - 2) + 2);
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 6;

console.log(sum);
if (sum < 21) {
    console.log('Do you want to draw a new card?');

} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack!");
} else if(sum > 21){
    console.log("You're out of the game!");
}



// CONDITIONALS
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
    console.log('Do you want to draw a new card?');
} else if (sum === 21) {
    console.log('Wohoo! You have got BlackJack!');
    hasBlackJack = true;
} else {
    console.log('You are out of the game!');
    isAlive = false;
}

console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false

*/

let firstCard = Math.floor(Math.random() * 13 + 1);
let secondCard = Math.floor(Math.random() * 13 + 1);;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';


if (sum <= 20) {
    console.log(firstCard);
    console.log(secondCard);
    message = 'Do you want to draw a new card?';
} else if (sum === 21) {
    console.log(firstCard);
    console.log(secondCard);
    message = 'Wohoo! You have got BlackJack!';
    hasBlackJack = true;
} else {
    console.log(firstCard);
    console.log(secondCard);
    message = 'You are out of the game!';
    isAlive = false;
}

console.log(message);
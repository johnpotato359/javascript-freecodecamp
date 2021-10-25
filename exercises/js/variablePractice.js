let firstName = 'Nicholas';
let lastName = 'Barbosa';

let fullName = firstName + ' ' + lastName;

console.log(`Hello, Mr. ${fullName}! Nice to meet you.`);


let namePerson = 'Linda';
let greeting = 'Hi there'

function greetingLinda() {
    console.log(`${greeting}, ${namePerson}!`)
}

greetingLinda();

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints--;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

console.log('2' + 2); // String -> '22'
console.log(11 + 7); // Number -> 18
console.log(6 + '5'); // String -> '65'
console.log('My Points: ' + 5 + 9); // String -> 'My Points: 59'
console.log(2 + 2); // Number -> 4
console.log('11'  + '14'); // String -> '1114'

// Create a person object that cointains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age, and country.

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Nicholas is 23 years old and lives in Brazil"

// Call the logData() function to verify that it works

let person = {
    name: "Nicholas",
    age: 23,
    country: "Brazil"
};


function logData() {
        console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
    }   

logData();


// CONDITIONAL STATEMENTS

// less than 6 years old    -> free
// 6 to 17 years old        -> child discount
// 18 to 26 years old       -> student discount
// 27 to 66 years old       -> full price
// over 66 years old        -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 18;

if(age < 6) {
    console.log("Free");
} else if(age <= 17) {
    console.log("Child discount");
} else if(age <= 26) {
    console.log("Student discount");
} else if(age <= 66) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}

// LOOP

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i]);
}

// Manipulating Arrays

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
largeCountries.shift();

largeCountries.push("Pakistan");
largeCountries.unshift("China");

console.log(largeCountries);


// Conditionals with Logic Operators

// If it is Friday the 13th, log out Spooky Face.

let dayOfMonth = 13;
let weekday = "Friday";

if(dayOfMonth === 13 && weekday === "Friday") {
    console.log("Spooky Face");
}

// Rock Scissor Paper

// Create a function that returns a random item from the array

let hands = ["Rock", "Paper", "Scissor"];

function getHand() {
    let number = Math.floor(Math.random() * 3);
    return hands[number];
}

console.log(getHand());




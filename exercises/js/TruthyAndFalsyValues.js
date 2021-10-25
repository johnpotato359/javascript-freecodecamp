const credits = 0;

if (credits) {
    console.log("Let's play");
} else {
    console.log("Sorry, you have no credits");
}


// truthy
// falsy


// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how Javascript signalizes emptiness
// NaN(Not a Number)

let currentViewers = null;

currentViewers = ["jane", "nick"];

currentViewers = null;

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers!");
}


console.log( Boolean("") ) //false
console.log( Boolean("0") ) //true
console.log( Boolean(100) ) //true
console.log( Boolean(null) ) //false
console.log( Boolean([0]) ) //true
console.log( Boolean(-0) ) //false
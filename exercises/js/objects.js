// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
};

console.log(course);

let person = {
    typeOfHair: "Liso",
    sex: "Feminino",
    height: "165",
    age: 25,
    isWorking: true,
    graduations: ["ADS", "COMEX", "Literatura"]
};

let castle = {
    title: "Live like a king in my castle",
    price:  190,
    isSuperHost: true,
    images: ["img/castle.png", "img/caste2.png"]
};

console.log(person.graduations);

console.log(castle.price);

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
];

console.log(tabs);
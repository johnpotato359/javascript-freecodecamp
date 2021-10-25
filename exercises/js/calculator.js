let num1 = 8;
let num2 = 2;

document.querySelector('span#num1-el').textContent = num1;
document.querySelector('span#num2-el').textContent = num2;

let result = document.querySelector('span#sum-el');

function add() {
    let sum = num1 + num2;
    result.textContent = `Sum:${sum}`;
    console.log('You clicked here!');
}

function subtract() {
    let sum = num1 - num2;
    result.textContent = `Sum:${sum}`;
    console.log('You clicked here!');
}

function divide() {
    let sum = num1 / num2;
    result.textContent = `Sum:${sum}`;
    console.log('You clicked here!');
}

function multiply() {
    let sum = num1 * num2;
    result.textContent = `Sum:${sum}`;
    console.log('You clicked here!');
}
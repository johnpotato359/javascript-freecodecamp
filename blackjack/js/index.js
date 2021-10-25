
let cards = []; // cards array
let sum = 0;

let player = {
    name: "Nicholas",
    chips: 145
};


let hasBlackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.querySelector('p#message-el');
let sumEl = document.querySelector('p#sum-el');
let cardsEl = document.querySelector('p#cards-el');
let playerEl = document.querySelector('p#player-el');

playerEl.textContent = `${player.name}: R$ ${player.chips}`;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1);
    if(randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    hasBlackJack = false;
    isAlive = true;
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];

    document.getElementById('newCardButton').style.backgroundColor = 'goldenrod';
    
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: ${cards}`;
    sumEl.textContent = `Sum: ${sum}`;
    playerEl.textContent = `${player.name}: R$ ${player.chips}`;

    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'Wohoo! You have got BlackJack!'
        hasBlackJack = true;
        setPlayerChips();
    } else {
        message = 'You are out of the game!';
        isAlive = false;
        setPlayerChips();
    }

    messageEl.textContent = message;
    
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        console.log('Drawing a new card from the deck!');
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        console.log(cards);
        renderGame();
    }
    if (!isAlive || hasBlackJack) {
        document.getElementById('newCardButton').style.backgroundColor = 'grey';
    }
}

function setPlayerChips() {
    if (hasBlackJack) {
        player.chips += 75;
    } else {
        player.chips -= 25;
    }
}